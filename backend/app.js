const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/fileRoutes.js');
const fileUpload = require('express-fileupload');

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(fileUpload());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE'); 
    next();
});

app.use("/api",routes);
app.use(express.static("frontend"));

module.exports = app;