const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({uploadDir:'./txts'});
const controller = require("../controllers/fileController.js");

const router = require('express').Router();

router.get('/getFile/:name',controller.getFile);

router.get('/getAllFiles', controller.getAllFiles)

router.post('/fileUpload' , controller.uploadFile);

router.get('/apiCall/:name', controller.apiCall);

module.exports  = router;