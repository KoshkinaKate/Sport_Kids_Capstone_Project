const jwt = require("jsonwebtoken");
const User = require("../models/user");

const requireAuth = async (req, res, next) => {
  console.log("Hit requireAuth()");

  // 1. Read token from cookies
  const token = req.cookies.Authorization;
  if (!token) return res.sendStatus(401);

  try {
    // 2. Decode Token
    const decoded = jwt.verify(token, process.env.SECRET);

    // 2a. Check if the token is expired
    if (Date.now() > decoded.exp) return res.sendStatus(401);

    // 3. Find user [decoded sub]
    const user = await User.findById(decoded.sub);
    if (!user) return res.sendStatus(401);

    // 4. Attach user to request
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    return res.sendStatus(401);
  }
};

module.exports = requireAuth;
