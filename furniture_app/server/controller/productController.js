
const Product = require('../model/Products');

module.exports = {
  createProduct: async(req,res) => {
    const newProduct = new Product(req.body)
    try {
      await newProduct.save()
      res.status(200).json('successfully created a new product')
    } catch (error) {
      res.status(500).json('error creating a new product')
    }
  },

  getAllProducts: async(req, res) => {
    try {
      const products = await Product.find().sort({createdAt:-1})
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json('error getting all products')
    }
  },

  getProduct: async(req, res) => {
    try {
      const product = await Product.findById(req.params.id)
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json("error getting the product");
    }
  },

  searchProduct: async(req, res) => {
    try {
      
    } catch (error) {
      
    }
  }
}