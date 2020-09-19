const mongoose = require('mongoose');

var productsSchema =  new mongoose.Schema({
    ProductName: {
        type: String
     }, 
     SupplierName: {
         type: String
     },
 
     CategoryName: {
         type: String
     },
 
     QuantityPerUnit: {
         type: String
     },
 
     SupplierName: {
         type: String
     },
 
     UnitPrice: {
         type: String
     },
 
     UnitInStock: {
         type: String
     },
 
     UnitOnOrder: {
         type: String
     },
 
     RecordLevel: {
         type: String
     },
 
     Discontinued: {
         type: String
     } 

});
mongoose.model('Products', productsSchema);
module.exports = mongoose.model('Products', productsSchema);
