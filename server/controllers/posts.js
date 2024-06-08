const Post = require("../models/posts");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

const createPost = async (req, res) => {
    // console.log(req.body);
    const { content, image } = req.body;
    if (!content.length) {
        return res.json({
            error: "Content is required."
        })
    }
    try {
        // console.log(req.auth._id)
        const post = new Post({
            content,
            image,
            postedBy: req.auth._id,
        })
        post.save();
        res.json(post);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

const createImage = async (req, res) => {
    console.log(req.files);
    try {
        if (!req.files || !req.files.image || !req.files.image.path) {
            return res.json({
                error: "Image is required."
            });
        } else {
            const result = await cloudinary.uploader.upload(req.files.image.path);
            console.log("UPLOADED IMAGE URL =>", result);
            res.json({
                url: result.secure_url,
                public_id: result.public_id,
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    createPost,
    createImage
}