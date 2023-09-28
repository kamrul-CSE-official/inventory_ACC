const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
const colors = require('colors');
const app = require('./app');

//Database connection
mongoose.connect(process.env.DATABASE_LOCAL)
    .then(() => {
        console.log(`Database connection successful 🎁`.red.bold);
    })

//server
const port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log(`App is running on port ${port} 🏃`.blue.bold);
});