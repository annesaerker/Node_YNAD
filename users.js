/******************  NPM  ******************/
var mysql = require('mysql')
var express = require('express')
var app = express()
var io = require('socket.io')(5000)
var formidable = require('express-formidable')
app.use(formidable())

//fs file system 
global.gFs = require ( 'fs' )

/******************  CONNECT TO DB  ******************/
var db = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"password",
    database:"dbynad",
    port:8889
})

db.connect( err => {
    if(err){console.log('ERROR'); process.exit()}
    console.log('CONNECTED')
})

/*********************  CREATE  ***********************/

// app.post("/save-user", (req, res) => { 
//     console.log(req.fields)
// }

// //Insert user into database
// var jUser = 
// {
//     "firstname": 'Mai',
//     "lastname": 'Saerker',
//     "profession": 'Web',
//     "description": 'I do web',
//     "email": 'a@s.com',
//     "password": '1234',
//     "profile_image": 'img.jpg',
//     "phone_number": '004527520067',
//     "instagram_url": 'https://www.instagram.com/annesaerker/',
//     "facebook_url": 'https://www.facebook.com/annesaerker',
//     "twitter_url": null,
//     "roles_idroles": 1,
//     "location_idlocation": 1,
//     "thread_idthread": null } 

// var stmt = 'INSERT INTO users SET ?'
// db.query(stmt, jUser, (err, jData)=>{
//     console.log("uData",jData);
//     if(jData.affectedRows == 1){
//         console.log('great, JSON user inserted');
//     }
//     //uData {"fieldCount":0,"affectedRows":1,"insertId":7,"serverStatus":2,"warningCount":0,"message":"","protocol41":true,"changedRows":0}
// })

/*********************  READ  ***********************/
// var stmt = "SELECT * FROM users"

// db.query( stmt , ( err , ajData ) =>{
//     console.log("ajData", ajData)
// })

/*********************  UPDATE  ***********************/


/*********************  DELETE  ***********************/