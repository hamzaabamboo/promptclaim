const Customer = require('../models/customer/customer-model');
const PurchasedProduct = require('../models/product/purchased-product-model');

const customer = new Customer('123', 'Trin', 'seng', '123432', '1999', 'M');
customer.addPurchasedProduct(new PurchasedProduct());

// new PurchasedProduct('','','','','','','','','','','','','','','')