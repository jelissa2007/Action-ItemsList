let express = require('express');
let mongodb = require('mongodb');

let app = express();

let db
let uri = 'yourUri'
let connectionString = 'mongodb+srv://todoUser:actionlist@cluster0.d9szq.mongodb.net/TodoApp?retryWrites=true&w=majority'


mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
   db = client.db()
   app.listen(3000);

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

