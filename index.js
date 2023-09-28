const app = require("./app");
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const colors = require('colors')


//database
mongoose.connect(process.env.DATABASE_LOCAL)
    .then(() => {
        console.log(`Database connect successsful 🎁`.red.bold);
    });



//listen
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`This server is runnign ${port} 🏃`.blue.bold);
});