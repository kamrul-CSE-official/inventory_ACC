const Product = require("../models/Product");
const { getProductsService, createProductService } = require("../services/products.services");


exports.getProducts = async (req, res, next) => {
    try {
        const products = await getProductsService();


        res.status(200).json({
            status: 'Success',
            data: products,
        });

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Can not get data',
            error: error.message
        })
    }
}

exports.createProduct = async (req, res, next) => {
    try {

        const result = await createProductService(req.body);

        res.status(200).json({
            status: 'Success',
            message: 'Data inserted successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data is not inserted',
            error: error.message
        });
    };
}