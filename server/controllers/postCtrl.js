var Post = require('./../models/Post.js');

module.exports = {

  create: function(req, res) {
        var newPost = new Post(req.body);
        newPost.save(function(err, result) {
          console.log(err,result);
          if(err) {
            res.status(500).send(err);
          } else {
            res.send(result);
          }
        });
  },

  index: function(req, res) {
    var page =req.query.page;
    delete req.query.page;
    Post.find(req.query).sort({dateOfPost: -1}).skip((page-1)*10).limit(10).exec(function(err, result) {
      if(err) {
        res.status(500).send(err);
      //if it is successful, do this
      } else {
        res.send(result);
      }
    });
  },

  update: function(req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },

  remove: function (req, res) {
    Post.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  }

};
