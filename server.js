const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const PORT = 8000


app.listen(process.env.PORT || PORT, () => {
    console.log(`Go catch the server at PORT ${process.env.PORT || PORT}`);
  })