var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

// connection configuration

var dbConn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'node_curd'
})

// connection database

dbConn.connect();
// dbConn.end() -> to close the connection

// add user

app.post('/addUser', function(req, res){
    var body = req.body;
    if(body.name == '' || body.email == ''){
       return res.status(400).send({
            status : 0,
            message : "Please provide required inputs"
        })
    }
    const insert_array = {name : body.name, email : body.email};
    dbConn.query("INSERT INTO users SET ?",[insert_array], function(error, result, fields){
        if(error){
            res.status(200).send({
                status : 0,
                message : error
            })
        }
        return res.status(200).send({
            status : 1,
            message : "Inserted Successfully"
        })
    } )
    
})

// get users list

app.get('/users', function(req, res){
    dbConn.query('SELECT * FROM users', function(error, results, fields){
        if(error){
            throw error;
        }
        return res.send({
            status : 1,
            message : "Users list",
            data : results
        });
    })
})

app.get('/user/:id', function(req, res){
    let user_id = req.params.id
    if(!user_id){
        return res.status(400).send({
            status : 0,
            message : "Please provide user id"
        })
    }
    dbConn.query('SELECT * FROM users WHERE id = ?', user_id, function(error, results){
        if(error){
            throw error;
        }
        return res.status(200).send({
            status : 1,
            message : "User data",
            data : results[0]
        })
    })
})
app.patch('userUpdate', function(req, res){
    var body = req.body;
    if(body.name == '' || body.user_id == ''){
        return res.status(400).send({
            status : 0,
            message : "Please provide required inputs"
        })
    }
    const update_arr = {name : body.name}
    dbConn.query("UPDATE users SET = ? WHERE id = ?",[update_arr, body.user_id], function(error, results, fields){
        if(error){
            return res.status(200).send({
                status : 0, 
                message : error
            })
        }
        return res.status(200).send({
            status : 1,
            message : "Updated Successfully"
        })
    })
})
app.delete('/user', function(req, res){
    let user_id = req.body.user_id;
    
    if(user_id == ''){
        res.status(400).send({
            status : 0,
            message : "Please provide user id"
        })
    }
    dbConn.query("DELETE from users WHERE id = ?", user_id, function(error, results, fields){
        if(error){
            res.status(200).send({
                status : 0,
                message : error
            })
        }
        return res.status(200).send({
            status : 1,
            message : "deleted successfully"
        })
    })
})

app.listen('3000', function(){
    console.log('Node curd app server is running on port 3000')
});

module.exports = app;