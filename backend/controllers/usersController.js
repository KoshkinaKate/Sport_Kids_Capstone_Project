const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// ----------------------------------------
// Handles user signup process
const signup = async (req, res) => {
  try {
    // 1. Get Email, Password, and Username from request body
    const { email, password, username } = req.body;

    // Validate that all required fields are provided
    if (!email || !password || !username) {
      return res.status(400).json({ error: "Email, password, and username are required" });
    }

    // ** Hash Password **
    const hashedPassword = bcrypt.hashSync(password, 8);

    // 2. Create User
    const newUser = await User.create({
      email,
      password: hashedPassword,
      username, // Include username in the creation
    });

    console.log("User Created", newUser);
    // Send Response
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    if (error.code === 11000) {
      // Handle duplicate key error
      return res.status(400).json({ error: "Username or Email already exists" });
    }
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ----------------------------------------
// Handles user login process
const login = async (req, res) => {
  try {
    // 1. Get email and password from request body
    const { email, password } = req.body;

    // Validate that email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // 2. Find User with the requested email
    const user = await User.findOne({ email });
    console.log(`User: ${user}`);
    if (!user) return res.status(401).json({ error: "Invalid email or password" });

    // 3. Compare provided password with the stored hashed password
    const passwordMatch = bcrypt.compareSync(password, user.password);
    console.log("Password Verified");
    if (!passwordMatch) return res.status(401).json({ error: "Invalid email or password" });

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

    res.status(200).json({ message: "Login successful" });
    // Cookies save information about a user's session
    // By default, Express doesn't read cookies off request body, so you need 'cookie-parser'
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ----------------------------------------
// Handles user logout process
const logout = (req, res) => {
  res.clearCookie("Authorization");
  res.status(200).json({ message: "Successfully Logged Out" });
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
