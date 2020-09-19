require('C:/Code/NorthWind/Models/db');
const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Products = mongoose.model('Products');

router.get('/', (req, res) => {
    res.render("Products/AddOrUpdates", {
        viewTittle : 'Insert a product'
    });
});

router.post('/', (req, res) => {
    insertProduct(req, res);
});

function insertProduct(req, res){
    var product = new Products();

    product.ProductName = req.body.ProductName;
    product.SupplierName = req.body.SupplierName;
    product.CategoryName = req.body.CategoryName;
    product.QuantityPerUnit = req.body.QuantityPerUnit;
    product.SupplierName = req.body.SupplierName;
    product.UnitPrice = req.body.UnitPrice;
    product.UnitInStock = req.body.UnitInStock;
    product.UnitOnOrder = req.body.UnitOnOrder;
    product.RecordLevel = req.body.RecordLevel;
    product.Discontinued = req.body.Discontinued; 
   
    product.save((err, doc) => {
        if(!err){
            res.redirect('Products/AddOrUpdates');
        }
        else{
            console.log('error while inserting', + err);
        }
    });
}

router.get('/', (req, res) => {

    res.json('from list');
});
module.exports = router;
