var { expressjwt: jwt } = require("express-jwt");
var Post = require("../models/posts");
var User = require("../models/user");

const requireSignin = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"]
});


const canEditDeletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params._id);
        // validate
        if (req.auth._id != post.postedBy) {
            return res.status(400).send("Unauthorized");
        }
        else {
            next();
        }
    }
    catch (err) {
        console.log(err);
    }
}

// Addfollower

const addFollower = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.body._id, { $addToSet: { followers: req.auth._id } });
        next();
    }
    catch (err) {
        console.log(err);
    }
}

// removeFollower
const removeFollower = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.body._id, {
            $pull: { followers: req.auth._id }
        })
        next();
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = { requireSignin, canEditDeletePost, addFollower, removeFollower }