var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('./../models/User');

// Add facebook Auth later


// var fbStrat = new FacebookStrategy({
//   clientID: process.env.facebookClientId,
//   clientSecret: process.env.facebookClientSecret,
//   callbackURL: '/auth/facebook/callback',
//   enableProof: true,
//   profileFields: ['id', 'displayName', 'photos', 'email']
// }, function(token, refreshToken, profile, done) {
//   findOrCreateFromFacebook(profile, done);
// });

module.exports = function(app, passport){

  app.use(passport.initialize());
  app.use(passport.session());
  // passport config
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
    function (email, password, done) {
  	User.findOne({ email: email }).exec(function (err, user) {
  		if (err) {
  			console.log(err);
  			return done(err);
  		}
  		if (!user) {
  			return done('user not found', false);
  		}
  		user.verifyPassword(password).then(function (isMatch) {
  			if (!isMatch) {
  				return done('incorrect credentials', false);
  			}
  			return done(null, user.toJSON());
  		});
  	});
  }));

  app.post('/auth/login', passport.authenticate('local', {
    successRedirect: "/api/me",
    failureRedirect: "/loginFailure"
  }));

  app.get('/api/me', function(req, res){
    res.send(req.user);
  });

  app.get("/auth/logout", function(req, res){
    req.logout();
    return res.send('logged out');
  });

  // Add facebook Auth later

  // app.get('/auth/facebook', passport.authenticate('facebook'), function(req, res) {
  //   //Under normal conditions this should not execute.
  //   console.log("Facebookauth experieced problems");
  // });
  //
  // app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  //   fialureRedirect: '/login'
  // }), function(req, res) {
  //   res.body = req.user;
  //   res.send({
  //     goto: "/"
  //   });
  // });

  passport.serializeUser(function (user, done) {
  	done(null, user._id);
  });

  passport.deserializeUser(function (id, done) {
  	User.findById(id).exec(function (err, user) {
  		if (err) { return done(err); }
  		done(null, user);
  	});
  });


};
