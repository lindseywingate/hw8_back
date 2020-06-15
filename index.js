
const express = require('express');
const app = express();
const debug = require('debug')('myapp:server');
const path = require('path');
const multer = require('multer');
const logger = require('morgan');
const serveIndex = require('serve-index');
const https = require('https');
const request = require('request');

var url = "http://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsByKeywords";
    url += "&SERVICE-VERSION=1.0.0";
    url += "&SECURITY-APPNAME=LindseyW-searchhw-PRD-02eb6be68-006d798c";
    url += "&GLOBAL-ID=EBAY-US";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&callback=_cb_findItemsByKeywords";
    url += "&REST-PAYLOAD";
    url += "&keywords=harry%20potter";
    url += "&paginationInput.entriesPerPage=3";


//get the router
const userRouter =require('./routes/user.route');

app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(express.static('public'));
//app.use('/ftp', express.static('public'), serveIndex('public', {'icons': true}));

var url = "https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=LindseyW-searchhw-PRD-02eb6be68-006d798c&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywords&REST-PAYLOAD&keywords=harry%20potter&paginationInput.entriesPerPage=3";

request('http://svcs.ebay.com/services/', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log("this is the body", body);
  console.log(body.explanation);
});

//app.post('/testUpload', upload.single('file'), function(req,res) {
//    debug(req.file);
//    console.log('storage location is ', req.hostname +'/' + req.file.path);
//    return res.send(req.file);
//})

//if end point is /users/, use the router.
//app.use('/users', userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    debug('Server is up and running on port ', port);
})
