const User = require("../models/user");
const { hashPassword, comparePassword} = require("../helpers/auth");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config();

const register =  async (req, res) => {
    // console.log("Register endpoint =>", req.body);

    // Destructuring req.body
    const { name, email, password, secret } = req.body;
    
    //Validation
    if(!name) {
        return res.json({
            error: "Name is required"
        })
    };

    if(!password || password.length < 6) {
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
    if(exist) {
        return res.json({
            error: "Email already exists"
        })
    };

    // Hash the password

    const hashedPassword = await hashPassword(password);

    // Create a new user
    const user = new User({
        name,
        email,
        password:  hashedPassword,
        secret,
    })

    // Save the user to database
    try {
        await user.save();
        console.log("REGISTERED USE =>" , user)
        return res.json({
            ok: true,
        });
    }
    catch(err) {
        console.log("REGISTER FAILED => ", err);
        return res.json({
            error: "Error. Try again."
        })
    }

};


// Login 
const login =  async (req, res) => {
    try{
        // Destructuring req.body
        const { email, password } = req.body;

        // Check if the email exists
        const user = await User.findOne({ email: email})
        if(!user) {
            return res.json({
                error: "User not found."
            });
        };

        // Check password
        const match = await comparePassword(password, user.password);
        if(!match) {
            return res.json({
                error: "Wrong password."
            })
        };

        // Create a token
        const token = jwt.sign({ _id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"});

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
        res.json({ ok: true});
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
    if (!newPassword || newPassword < 6){
        return res.json({
            error: "New Password is required and should be min 6 characters long."
        })
    }
    if (!secret){
        return res.json({
            error: "Secret is required."
        })
    }

    // check if email exists
    const user = await User.findOne({ email, secret});
    if (!user){
        return res.json({
            error: "User not found."
        })
    }

    try{
        const hashed = await hashPassword(newPassword);
        await User.findByIdAndUpdate(user._id, { password: hashed})
        return res.json({
            success: "Congrats! now you can login with your new password."
        })
    }
    catch (err){
        console.log(err);
        return res.json({
            error: "Something wrong, try again."
        })
    }
}




module.exports = { register, login, currentUser, forgotPassword };


