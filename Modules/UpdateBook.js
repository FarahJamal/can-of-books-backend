
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const MongooseItems = require("./BookSchema"); // this one is object cuz i export two things from mongoose-books

function updateBook(req,res) {
    const index = req.params.index;
    const {title, description, imageUrl, status, email} = req.body;
    MongooseItems.findOne({email:'farahsarese98@gmail.com'},(err,resultData) => {
        resultData.books.splice(index,1,{
            title : title,
            description : description,
            imageUrl:imageUrl,
            status:status
        })
        resultData.save();
        res.send(resultData.books);
    })
  }
  
  






module.exports = updateBook;