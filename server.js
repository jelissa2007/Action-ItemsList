let express = require('express');
const mongoose = require('mongoose');
const  mongodb = require('mongodb');
const { MongoClient } = require('mongoose/node_modules/mongodb');

let app = express();

// let db = 

let connectionString = 'mongodb+srv://todoUser:actionlist@cluster0.d9szq.mongodb.net/TodoApp?retryWrites=true&w=majority';

const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect (err =>  {
    db = client.db()
    app.listen(3000)
    
});

app.use(express.urlencoded({extended: false}));

app.get('/', function(req, res){
    
    res.sendFile('todoApp.html', {root: __dirname})
       

});


app.post('/create-item', function(req, res) {
   
    db.collection('items').insertOne({text: req.body.item}, function(){

        res.send('thanks for submiting you rock!')


    });

   

});

