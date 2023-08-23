
const router = require('express').Router();
const productController = require('../controller/productController')

router.get('/',productController.getAllProducts)
router.get('/:id',productController.getProduct)
// router.get('/search/:key',productController.getAllProducts)
router.get('/',productController.createProduct)

module.exports = router