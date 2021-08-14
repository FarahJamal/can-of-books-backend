'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const getBooksSchema = require("./Modules/BookSchema");
const addBooksHandler=require('./Modules/AddBooks');
const deleteData =require('./Modules/DeleteBook');
const updateBook=require('./Modules/UpdateBook');
const restaurant = require('./Modules/Test');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;
app.use(express.json());

app.post('/addbooks',addBooksHandler);
app.delete('/deleteBook/:index',deleteData);

app.put('/update/:books_id', updateBook);
app.get('/res', restaurant)

//http://localhost:4444/books?email=farahsarese@gmail.com
app.get('/books', (request, response) => {
  let email=request.query.email;
  getBooksSchema.find({email:email},function(error,data){
    if(error){
      console.log(" sorry, failed with some errors");
    }
    else{
      //console.log(data);
      response.send(data);
    }
  })

})
app.listen(PORT, () => console.log(`listening on ${PORT}`));
