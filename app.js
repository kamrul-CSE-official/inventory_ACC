const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

//Midleweres
app.use(express.json());
app.use(cors());


// Schema design
const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please provide a name for product"],
        trim: true,
        unique: [true, "Name must unique"],
        minLength: [3, "Name must be at least 3 characters"],
        maxLength: [100, "Name is too large"]
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
        min: [0, 'Price can not be negative'],
    },
    unit: {
        type: String,
        required: true,
        enum: ['KG', 'Litre', 'Pic'],
        message: 'Unit must be kg/litre/pic',
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, 'Quantity cannot be negative'],
        validate: {
            validator: Number.isInteger,
            message: "Quantity must be an integer"
        }
    },
    status: {
        type: String,
        require: true,
        enum: ["in-stock", "out-of-stock", 'discontinued'],
        message: "Status can't be {VALUE}"
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier'
    },
    categories: [
        {
            name: {
                type: String,
                required: true,
            },
            _id: mongoose.Schema.Types.ObjectId
        }
    ]


}, {
    timestamps: true
})


app.get('/', (req, res) => {
    res.send("Router is working.");
});

module.exports = app;
