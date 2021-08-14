
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const MongooseItems = require("./BookSchema"); // this one is object cuz i export two things from mongoose-books



function updateBook(req, res) {

    const { name, description, status, image_url, email } = req.body;
    //const name = req.body.name
    //...
    const index = Number(req.params.book_Index);
    MongooseItems.findOne({ email: email }, (err, userData) => {
        console.log(userData);
   /*      userData.books.splice(index, 1, {
            name: name,
            description: description,
            status: status,
            image_url: image_url,
        }) */
        console.log('after splice',userData);
        //userData.save();
        //res.send(userData.books)


    })

}




module.exports = updateBook;