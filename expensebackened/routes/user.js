const express = require('express');
const router = express.Router();

const controller = require('../controllers/user')

router.post('/ExpenseTracker',controller.postdetails);

router.get('/userinfo',controller.getdetails);

router.delete('/deleteinfo/:id',controller.delete)

module.exports= router ;