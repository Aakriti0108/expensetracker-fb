const express = require('express');

const expense =express();

const bodyParser = require('body-parser');

const cors =require('cors');

const sequelize = require('./util/database');

const product = require('./models/product')

const userRouter = require('./routes/user')

expense.use(bodyParser.json())

expense.use(cors())

expense.use(userRouter)

sequelize
.sync()
.then(result =>{
    // console.log(result);
    expense.listen(3000);
})
.catch(err =>{
    console.log(err);
})