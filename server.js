let express = require('express');

let app = express();

app.get('/', function(req, res){
    // res.send("Hello, welcome to my Action Item List!")
    res.sendFile('todoApp.html', {root: __dirname})
     
    

});
app.listen(3000);
