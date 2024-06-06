const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();
// Controllers
const { createPost } = require("../controllers/posts");

// Middleware
const { requireSignin } = require('../middleware');



router.post("/create-post", requireSignin, createPost);

module.exports = router;