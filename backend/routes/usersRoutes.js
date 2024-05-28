const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const authenticate = require("../middleware/requireAuth");

router.post("/signup", usersController.signup);
router.post("/login", usersController.login);
router.get("/logout", authenticate, usersController.logout);
router.get("/protected/data", authenticate, usersController.checkAuth);

module.exports = router;
