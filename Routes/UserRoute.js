const express = require('express')
const router = express.Router()
const Controller = require('../Controllers/UserControllers')




router.post('/register', Controller.addUser) 
router.post('/login', Controller.login) 
router.post('/send_otp', Controller.sendOpt) 
router.post('/verify_otp', Controller.verifyOtpAndChangePassword) 
router.get('/get-all-products', Controller.getAllProducts) 
router.post('/add-to-cart', Controller.AddToCart) 
router.get('/get-my-detailed-cart', Controller.getDetailedCartdata) 
router.get('/get-my-cart', Controller.GetMyCart) 
router.post('/update-quantity', Controller.handleQunatity) 
router.post('/purchase_order', Controller.PurchaseOrder) 
router.get('/get-orders-history', Controller.getAllOrders) 







module.exports = router