var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var MongoStore = require('connect-mongo/es5')(session);
var config = require('./config.json');



var userCtrl = require('./controllers/userCtrl.js');
var postCtrl = require('./controllers/postCtrl.js');



var app = express();

app.use(bodyParser.json());

var mongo_uri = "mongodb://localhost:27017/utahAnglersClub";
mongoose.connect(mongo_uri);
mongoose.connection.once("open", function() {
  console.log("We are connected to utahAnglersClub database.");
});
var sessionOptions = {
  mongooseConnection: mongoose.connection
};
app.use(session({
  secret: config.secret,
  store: new MongoStore(sessionOptions)
}));

// api endpoint protection helper method
var isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.status(403).send('Not logged in');
  }
};

app.use(express.static(__dirname + '/../public'));
require('./config/passportConfig.js')(app, passport); //set up passport

//user API
app.get('/api/users', userCtrl.index);
app.get('/api/user/:id', userCtrl.show);
app.post('/api/users', userCtrl.create);
app.put('/api/users/:id', userCtrl.update);
app.delete('/api/users/:id', userCtrl.remove);

//post API
app.get('/api/posts', postCtrl.index);
app.post('/api/posts', postCtrl.create);
app.put('/api/posts/:id', postCtrl.update);
app.delete('/api/posts/:id', postCtrl.remove);

var port = 3000;
app.listen(port, function() {
  console.log('listening on port ' + port);
});
