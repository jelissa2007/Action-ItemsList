let express = require('express');

let app = express();

app.use(express.urlencoded({extended: false}));

app.get('/', function(req, res){
    // res.send("Hello, welcome to my Action Item List!")
    res.sendFile('todoApp.html', {root: __dirname})
     
    

});

// app.post(a, b)

app.post('/create-item', function(req, res) {
    console.log(req.body.item)

    res.send('thanks for submiting you rock!')

});

app.listen(3000);
