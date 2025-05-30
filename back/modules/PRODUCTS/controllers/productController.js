const Product = require("../models/productModel");

const getAll = async (req, res) => {
    try{
        let products = await Product.getAll();

        res.json({
            message: "success",
            data: products,
        });
    }catch (error) {
        res.status(500).json({ message: "Error al obtener los productos", error: error.message });
    }
};

module.exports = {
  getAll,
};
