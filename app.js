const express = require('express');
const app = express();
const cors = require('cors');

//midleware
app.use(express.json());
app.use(cors());


//routers
const productRoute = require('./routes/products.route');
app.get('/', (req, res) => {
    res.send("Router is runing...");
});
app.use('/api/v1/product', productRoute);




module.exports = app;