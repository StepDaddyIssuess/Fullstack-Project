const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();
const { register, login, currentUser, forgotPassword, profileUpdate, findPeople, userFollow, userFollowing, userUnfollow } = require("../controllers/auth");
const { requireSignin, addFollower, removeFollower } = require('../middleware');



router.post("/register", register);
router.post("/login", login);
router.get("/current-user", requireSignin, currentUser);
router.post("/forgot-password", forgotPassword);
router.put("/profile-update", requireSignin, profileUpdate)
router.get("/find-people", requireSignin, findPeople)
router.put("/user-follow", requireSignin, addFollower, userFollow);

router.get("/user-following", requireSignin, userFollowing)
router.put("/user-unfollow", requireSignin, removeFollower, userUnfollow)

module.exports = router;