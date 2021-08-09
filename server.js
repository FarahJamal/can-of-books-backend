'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const getBooksSchema = require("./Modules/BookSchema");


const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;


//http://localhost:4444/books?email=farahsarese@gmail.com
app.get('/books', (request, response) => {
  let email=request.query.email;
  getBooksSchema.find({email:email},function(error,data){
    if(error){
      console.log(" sorry, failed with some errors");
    }
    else{
      console.log(data);
      response.send(data);
    }
  })

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
