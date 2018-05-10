/******************  NPM  ******************/
var mysql = require('mysql')
var express = require('express')
var app = express()
var io = require('socket.io')(5000)
var formidable = require('express-formidable')
app.use(formidable())

//fs file system 
global.gFs = require ( 'fs' )

 //this makes the code in this folder public
 app.use( express.static( __dirname + '/public') )

/***************  DIRECT TO INDEX  ****************/
app.get( '/' , ( req , res ) => {
    var sHeaderHtml = gFs.readFileSync( __dirname + '/html/header.html', 'utf8' )
    var sMainHtml = gFs.readFileSync( __dirname + '/html/index.html', 'utf8' )
    var sFooterHtml = gFs.readFileSync( __dirname + '/html/footer.html', 'utf8' )

    // //this makes the code in this folder publiv
    // app.use( express.static( __dirname + '/public') )

    // // replace placeholder
    // sTopHtml = sTopHtml.replace ('{{title}}', 'PROJECT : : Welcome')
    // sTopHtml = sTopHtml.replace ('{{active-home}}', ' active' ).replace ( /{{active-.*}}/g , '' )

    // // sTopHtml = sTopHtml.replace ('{{active-home}}', ' active' )
    // // g global , change all the places not only the first incounter
    // // /{{active-.*}}/g   regurlar expression, works in all langueges
    // // sTopHtml = sTopHtml.replace ( /{{active-.*}}/g , '' )


    // // replace script
    // // you dont have to includ public in the rout, beacuse of the line of code that makes the code pulic
    // sBottomHtml = sBottomHtml.replace('{{script}}' , '<script src="js/index.js"> </script>')

    res.send( sHeaderHtml + sMainHtml + sFooterHtml )

    // for sending the whole file
    // res.sendFile( __dirname + '/html/index.html')
    // sMainHtml can also be sIndexHtml or sContactHtml ... but if you dont want to make alot of changed, use the same name for the stuff that is the same.
})


/******************  Listening to port  ******************/
var port = 1982
app.listen(port, err => {
    if(err) {
        console.log("error");
        return
    }
    console.log("server is running on port 1982");
})