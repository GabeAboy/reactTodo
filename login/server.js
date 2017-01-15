var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var cors = require('cors');

var port = 3000;
var conn = massive.connectSync({
  connectionString : "postgres://postgres:@localhost/loginTest"
});
var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.set('db', conn);
var db = app.get('db');


app.post('/userLogin',function(req,res) {
  console.log('hit server');
  console.log('user',req.body.username);
  db.CREAT_USER([req.body.username,req.body.pass],function(err,response) {
    console.log('something',response);
    console.log('err',err);
    if(!err)res.status(200).send(response);
    else res.status(422).send(err)

  })
})

app.listen(port, function() {
  console.log("Started server on port", port);
});
