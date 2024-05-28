const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// ----------------------------------------
// Handles user signup process
const signup = async (req, res) => {
  try {
    // 1. Get Email and Password from request body
    const { email, password } = req.body;

    // ** Hash Password **
    const hashedPassword = bcrypt.hashSync(password, 8);

    // 2. Create User
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    console.log("User Created", newUser);
    // Send Response
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

// ----------------------------------------
// Handles user login process
const login = async (req, res) => {
  try {
    // 1. Get email and password from request body
    const { email, password } = req.body;

    // 2. Find User with the requested email
    const user = await User.findOne({ email });
    console.log(`User: ${user}`);
    if (!user) return res.sendStatus(401);

    // 3. Compare provided password with the stored hashed password
    const passwordMatch = bcrypt.compareSync(password, user.password);
    console.log("Password Verified");
    if (!passwordMatch) return res.sendStatus(401);

    // 4. Create JWT
    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30; // Token expiration set to 30 days
    console.log(exp);
    const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);
    console.log("Token:", token);

    // Set the token as a cookie
    res.cookie("Authorization", token, {
      expires: new Date(exp), // sets expiration date for cookie
      httpOnly: true,         // allows only browser and server to read
      sameSite: "lax"         // CSRF protection
    });

    res.sendStatus(200);
    // Cookies save information about a user's session
    // By default, Express doesn't read cookies off request body, so you need 'cookie-parser'
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

// ----------------------------------------
// Handles user logout process
const logout = (req, res) => {
  res.clearCookie("Authorization");
  res.sendStatus(200);
  console.log(`Successfully Logged Out`);
};

// ----------------------------------------
// Checks if the user is authenticated
const checkAuth = (req, res) => {
  console.log(req.user);
  res.sendStatus(200);
};

module.exports = {
  signup,
  login,
  logout,
  checkAuth
};
