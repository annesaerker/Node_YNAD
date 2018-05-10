/******************  NPM  ******************/
var mysql = require('mysql')
var express = require('express')
var app = express()
var io = require('socket.io')(5000)
var formidable = require('express-formidable')
app.use(formidable())

//fs file system 
global.gFs = require ( 'fs' )


/******************  Listening to port  ******************/
var port = 1982
app.listen(port, err => {
    if(err) {
        console.log("error");
        return
    }
    console.log("server is running on port 1982");
})