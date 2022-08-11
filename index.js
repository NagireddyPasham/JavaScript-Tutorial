var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))

// database config

const dbConn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'node_curd'
});
// db connection
dbConn.connect();

app.post('/addUser', (req, res) =>{
    var body = req.body;
    if(empty(body)){
        res.status(400).send({
            status : 0,
            message : "Need valid input"
        })
    }
    const insert_arr = {name : body.name, email : body.email}
    dbConn.query("INSERT into users", [insert_arr], (error, results, fields) => {
        if(error){
            res.status(400).send({
                status : 0,
                message : error
            })
        }
        res.status(400).send({
            status : 0,
            message : results
        })
    })

})
app.get('/users', (req, res) =>{
    

})
app.get('/user/:user_id', (req, res) =>{
    

})
app.patch('/updateUser', (req, res) =>{
    

})
app.delete('/deleteUser', (req, res) =>{
    

})

//dbConn.end(); -> to end db connection

app.listen('3000', function(){
    console.log("Server is running on 3000");
});

// 

