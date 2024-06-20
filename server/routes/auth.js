const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

// Controllers
const { register, login, currentUser, forgotPassword, profileUpdate, findPeople, userFollow, userFollowing, userUnfollow, searchUser } = require("../controllers/auth");

// Middleware
const { requireSignin, addFollower, removeFollower } = require('../middleware');



router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);

router.get("/current-user", requireSignin, currentUser);
router.put("/profile-update", requireSignin, profileUpdate)
router.get("/find-people", requireSignin, findPeople)

router.put("/user-follow", requireSignin, addFollower, userFollow);
router.get("/user-following", requireSignin, userFollowing)
router.put("/user-unfollow", requireSignin, removeFollower, userUnfollow)

router.put("/search-user/:query", searchUser);

module.exports = router;