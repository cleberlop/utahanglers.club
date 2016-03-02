var User = require('./../models/User.js');

module.exports = {

  create: function(req, res) {
    // User.findOne({email: req.body.email}, function(err, user){
    //   if (!user) {
        var newUser = new User(req.body);
        newUser.save(function(err, result) {
          console.log(err,result);
          if(err) {
            res.status(500).send(err);
          } else {
            res.send(result);
          }
        });
      // }
    //   else {
    //     res.status(403).send('email in use');
    //   }
    // });

  },

  index: function(req, res) {
    User.find(req.query, function(err, result) {
      if(err) {
        res.status(500).send(err);
      //if it is successful, do this
      } else {
        res.send(result);
      }
    });
  },

  show: function(req, res) {
    User.findById(req.params.id, function(err, result) {
      if(err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },


  update: function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },

  remove: function (req, res) {
    User.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  }

};
