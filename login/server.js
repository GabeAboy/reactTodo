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
app.post('/userLoginCheck',function(req,res) {
  console.log('hit server');
  console.log('user',req.body.username);
  db.CHECK_USER([req.body.username,req.body.pass],function(err,response) {
    console.log('something',response);
    console.log('err',err);
    if(!err){
      if(response.length<=0) {
        return res.status(404).send('User not found');
      }
      return res.status(200).send('success');
  }
  else {
    res.status(422).send('Something went wrong');
  }

  })
})

app.listen(port, function() {
  console.log("Started server on port", port);
});
// if(!err){
//   console.log('user',userInfo);
//   if(userInfo.length<=0) {
// console.log('user2',userInfo);
//     return res.status(404).send('User not found');
//   }
//   return res.status(200).send('success');
// }
// else {
//   console.log(err);
//   res.status(422).send('Something went wrong');
// }
