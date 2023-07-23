const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


const adminRoute = require('./routes/admin.js');
const reviewRoute = require('./routes/review.js');
const artistRoute = require('./routes/artist.js');

const app = express();
dotenv.config();

const uri = process.env.URI;
const PORT = process.env.PORT;

//json parser, limit set to 30 MB for image transfer
app.use(express.json({
    limit: "30mb", extended: true
}));

app.use(express.urlencoded({
    limit: "30mb", extended: true
}));

app.use(cors());

// connecting to the database
async function connect()
{
    try
    {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    }
    catch(err)
    {
        console.error(err);
    }
}

connect();
// const connection = mongoose.connection;
// module.exports = connection;

// specify /test for specific routes
//app.use('/', userRoute);
app.use('/', adminRoute);
app.use('/review', reviewRoute);
app.use('/artist', artistRoute);
//Server PORT number


app.listen(PORT, ()=>{
    console.log("Listening on PORT: " + PORT);
})