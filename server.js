const express = require('express');

const mongoose = require('mongoose');

require('dotenv').config()

const app = express();

const port = process.env.PORT || 1234


app.use(express.json());


//Database connection
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true ,useFindAndModify: false}
);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Adding routes

const bookRouter = require('./routes/book');



app.use('/book', bookRouter);



app.listen(port,()=>{
    console.log(`server is runnig on port ${port}`)
})

