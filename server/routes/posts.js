const express = require('express');
const dotenv = require('dotenv');
const formidable = require("express-formidable");


dotenv.config();

const router = express.Router();
// Controllers
const { createPost, createImage, postsByUser, userPost, updatePost, deletePost, newsFeed, likePost, unlikePost, addComment, removeComment, totalPosts, posts, getPost } = require("../controllers/posts");

// Middleware
const { requireSignin, canEditDeletePost, isAdmin } = require('../middleware');

router.get('/favicon.ico', (req, res) => res.status(204).end());

router.post("/create-post", requireSignin, createPost);
router.post("/upload-image",
    requireSignin,
    formidable({ maxFileSize: 5 * 1024 * 1024 }),
    createImage);

router.get("/user-posts", requireSignin, postsByUser);
router.get("/user-post/:_id", requireSignin, userPost);

router.put("/update-post/:_id", requireSignin, canEditDeletePost, updatePost)
router.delete("/delete-post/:_id", requireSignin, canEditDeletePost, deletePost)

router.get("/news-feed/:page", requireSignin, newsFeed)
router.get("/total-posts", totalPosts);

router.put("/like-post", requireSignin, likePost)
router.put("/unlike-post", requireSignin, unlikePost)

router.put("/add-comment", requireSignin, addComment)
router.put("/remove-comment", requireSignin, removeComment)

router.get("/posts", posts)
router.get("/post/:_id", getPost)

//Admin
router.delete("/admin/delete-post/:_id", requireSignin, isAdmin, deletePost)




module.exports = router;
