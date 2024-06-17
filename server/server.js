const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { readdirSync } = require("fs"); 

dotenv.config();

//Create APP
const app = express();

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
app.use(express.urlencoded({ extended: true}));
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
}));
 

// AutoLoad routes
/* apply every route as middleware */
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));


// APP LISTEN 
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



