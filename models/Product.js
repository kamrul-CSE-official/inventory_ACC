const mongoose = require("mongoose");




const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provice a name for product'],
        trim: true,
        unique: [true, 'Name must unique'],
        minLength: [3, 'Name must be at lest 3 charecters'],
        maxLength: [100, 'Name is too large']
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price can not navatice']
    },
    unit: {
        type: String,
        required: true,
        enum: {
            values: ['KG', 'Liter', 'Pic'],
            message: 'Unit must be KG/Liter/Pic'
        }
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, 'Quantity must be an positive'],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if (isInteger) {
                    return true
                } else {
                    return false
                }
            }
        },
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ['in-stock', 'out-of-stock', 'discontinued'],
            message: 'Status value in-stock/out-of-stock/discontinued'
        }
    },
    // supplier: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Supplier'
    // },
    // categories: [
    //     {
    //         name: {
    //             type: String,
    //             require: true
    //         },
    //         _id: mongoose.Schema.ObjectId
    //     }
    // ]


}, { timestamps: true });

// Schema --> Model --> Query
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
