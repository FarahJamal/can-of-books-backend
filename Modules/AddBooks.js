
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const MongooseItems = require("./BookSchema"); // this one is object cuz i export two things from mongoose-books


function addbooksHandler(req, res) {
  const {title,description,imageUrl,status,email} = req.body;
console.log(description);

  MongooseItems.find({ email: email }, (err, data) => {
    if (err) {
      res.status(500).send("there is error");
    } else {
        if(data[0]!==undefined){
      data[0].books.push({
       title:title,
       description:description,
       imageUrl:imageUrl,
       status:status
          });
          data[0].save();
      res.send(data);
    }
    else{
        console.log('witing adding data')
    }
}
   
  });
}

module.exports = addbooksHandler;