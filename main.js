const express = require('express')
const bodyParser = require('body-parser')

const db = require ('./modules/dbCon')

const app = express()
app.use(bodyParser.json())
const port = 3000;

global.conDB = db;

//konfigurasiRoutes
const provinceRoute = require('./routes/provinces')
app.use(provinceRoute)

//konfigCarRoute
const carRoute = require('./routes/car')
app.use(carRoute)



console.log("server running in port : ", port);
app.listen(port)

