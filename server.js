const express = require('express')
const mongoose = require('mongoose')
    // mongoose.Promise = global.Promise;
const cors = require('cors');
require('dotenv').config()

const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json())
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
}).on('error', function(err) { console.log('Error', err) })

let v1 = require('./routes');

app.use('/', v1.router);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

module.exports = app