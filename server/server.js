const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { readdirSync } = require("fs");

dotenv.config();

//Create APP
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
    path: "/socket.io",
    cors: {
        origin: [process.env.CLIENT_URL_MAIN, process.env.CLIENT_URL_SECONDARY],
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
    }
})

// DB CONNECTION
mongoose.connect(process.env.DATABASE)
    .then(() => {
        console.log("DB CONNECTED!");
    })
    .catch(err => console.log("DB CONNECTION ERROR =>", err));

// ADD MIDDLEWARE
app.use(express.json({
    limit: "5mb",
}));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: [process.env.CLIENT_URL_MAIN, process.env.CLIENT_URL_SECONDARY],
}));


// AutoLoad routes
/* apply every route as middleware */
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

//Socket
io.on("connect", (socket) => {
    socket.on("new-post", (newPost) => {
        socket.broadcast.emit("new-post", newPost);
    })
})



// APP LISTEN 
const port = process.env.PORT || 8000
http.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



