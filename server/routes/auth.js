const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();
const { register, login, currentUser, forgotPassword, profileUpdate, findPeople } = require("../controllers/auth");
const { requireSignin } = require('../middleware');



router.post("/register", register);
router.post("/login", login);
router.get("/current-user", requireSignin, currentUser);
router.post("/forgot-password", forgotPassword);
router.put("/profile-update", requireSignin, profileUpdate)
router.get("/find-people", requireSignin, findPeople)

module.exports = router;