const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
const user = require("../models/user");


dotenv.config();

const register = async (req, res) => {
    // console.log("Register endpoint =>", req.body);

    // Destructuring req.body
    const { name, email, password, secret } = req.body;

    //Validation
    if (!name) {
        return res.json({
            error: "Name is required"
        })
    };

    if (!password || password.length < 6) {
        return res.json({
            error: "Password is required and must be at least 6 characters"
        })
    };

    if (!secret) {
        return res.json({
            error: "Secret is required."
        })
    };

    // check if email already exists
    const exist = await User.findOne({ email });
    if (exist) {
        return res.json({
            error: "Email already exists"
        })
    };

    // Hash the password

    const hashedPassword = await hashPassword(password);
    const { nanoid } = await import('nanoid');
    // Create a new user
    const user = new User({
        name,
        email,
        password: hashedPassword,
        secret,
        username: nanoid(6),
    })

    // Save the user to database
    try {
        await user.save();
        console.log("REGISTERED USE =>", user)
        return res.json({
            ok: true,
        });
    }
    catch (err) {
        console.log("REGISTER FAILED => ", err);
        return res.json({
            error: "Error. Try again."
        })
    }

};


// Login 
const login = async (req, res) => {
    try {
        // Destructuring req.body
        const { email, password } = req.body;

        // Check if the email exists
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.json({
                error: "User not found."
            });
        };

        // Check password
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.json({
                error: "Wrong password."
            })
        };

        // Create a token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        // password and secret undifned
        user.password = undefined;
        user.secret = undefined;

        // Send user to frontend
        res.json({
            token,
            user,
        });
    }
    catch (error) {
        console.log(error);
        return res.json({
            error: "Error. try again."
        });
    }
}

const currentUser = async (req, res) => {
    try {
        // Try to find the user based on the token Id provided
        const user = await User.findById(req.auth._id);
        // console.log(req.auth);


        // once we found the user, send json respone
        // res.json(user);
        res.json({ ok: true });
    }
    catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}

const forgotPassword = async (req, res) => {
    // console.log(req.body);
    const { email, newPassword, secret } = req.body;

    //validation
    if (!newPassword || newPassword < 6) {
        return res.json({
            error: "New Password is required and should be min 6 characters long."
        })
    }
    if (!secret) {
        return res.json({
            error: "Secret is required."
        })
    }

    // check if email exists
    const user = await User.findOne({ email, secret });
    if (!user) {
        return res.json({
            error: "User not found."
        })
    }

    try {
        const hashed = await hashPassword(newPassword);
        await User.findByIdAndUpdate(user._id, { password: hashed })
        return res.json({
            success: "Congrats! now you can login with your new password."
        })
    }
    catch (err) {
        console.log(err);
        return res.json({
            error: "Something wrong, try again."
        })
    }
}

const profileUpdate = async (req, res) => {
    try {
        // console.log(req.body)
        const data = {};

        // Validate and if validated put in data
        if (req.body.username) {
            data.username = req.body.username;
        };

        if (req.body.about) {
            data.about = req.body.about;
        }

        if (req.body.name) {
            data.name = req.body.name;
        }

        if (req.body.password) {
            if (req.body.password < 6) {
                return res.json({
                    error: "Password is required and must be at least 6 characters"
                })
            }
            else {
                data.password = await hashPassword(req.body.password);
            }
        }

        if (req.body.secret) {
            data.secret = req.body.secret;
        }

        if (req.body.image) {
            data.image = req.body.image;
        }

        // Update 

        let user = await User.findByIdAndUpdate(req.auth._id, data, { new: true })
        user.password = undefined;
        user.secret = undefined;
        // console.log(user);

        res.json(user);

    }
    catch (err) {
        if (err.code === 11000) {
            return res.json({
                error: "Duplication error, Something wrong"
            })
        }
        console.log(err);
    }
}

const findPeople = async (req, res) => {
    try {
        const user = await User.findById(req.auth._id);
        // Follwing people
        let following = user.following;
        // console.log(user._id)
        following.push(user._id);

        const people = await User.find({ _id: { $nin: following } }).select("-password -secret").limit(10);
        res.json(people);
    }
    catch (err) {
        console.log(err);
    }
}

// userFollow

const userFollow = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.auth._id,
            { $addToSet: { following: req.body._id } },
            { new: true }
        ).select("-password -secret")
        res.json(user);
    }
    catch (err) {
        console.log(err);
    }
}

const userFollowing = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.auth._id);

        let following = await User.find({ _id: user.following })
            .limit(100)

        res.json(following);
    }
    catch (err) {
        console.log(err);
    }
}

const userUnfollow = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.auth._id, {
            $pull: { following: req.body._id }
        },
            { new: true }
        )
        console.log(user)
        res.json(user);
    }
    catch (err) {
        console.log(err);
    }
}

const searchUser = async (req, res) => {
    // Destructure
    const { query } = req.params;
    if (!query) return;

    // try / catch
    try {

        // Find the user
        const users = await User.aggregate([
            {
                $match: {
                    $or: [
                        { name: { $regex: query, $options: "i" } },
                        { username: { $regex: query, $options: "i" } }
                    ]
                }
            },
            {
                $group: {
                    _id: "$_id", // Ensure unique users by ID
                    name: { $first: "$name" },
                    username: { $first: "$username" },
                    // Include other fields you want to return
                }
            }
        ]);
        res.json(users);
    }
    catch (err) {
        console.log(err);
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username })
            .select("-password -secret");

        res.json(user);
    }
    catch (err) {
        console.log(err);
    }
}

const users = async (req, res) => {
    const user = await User.find()
        .select("-password -secret")
        .limit(100);
    res.json(user)
}

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params._id);
        res.json({ message: "User deleted successfully" });
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

}

module.exports = { register, login, currentUser, forgotPassword, profileUpdate, findPeople, userFollow, userFollowing, userUnfollow, searchUser, getUser, users, deleteUser };


