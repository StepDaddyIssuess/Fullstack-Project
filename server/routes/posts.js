const express = require('express');
const dotenv = require('dotenv');
const formidable = require("express-formidable");

dotenv.config();

const router = express.Router();
// Controllers
const { createPost, createImage } = require("../controllers/posts");

// Middleware
const { requireSignin } = require('../middleware');



router.post("/create-post", requireSignin, createPost);
router.post("/upload-image",
              requireSignin,
              formidable({ maxFileSize: 5 * 1024 * 1024}),
              createImage);

module.exports = router;