const Post = require("../models/posts");

const createPost = async (req, res) => {
    // console.log(req.body);
    const { content } = req.body;
    if (!content.length) {
        return res.json({
            error: "Content is required."
        })
    }
    try {
        // console.log(req.auth._id)
        const post = new Post({
            content,
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

module.exports = {
    createPost
}