angular.module('utahClub').service('postService', function($http, $state) {

var post = {};
  this.createPost = function(post) {
    return $http.post('/api/posts', post)
    .then(function(result) {
      return result.data;
    });
  };

  this.getPosts = function(page) {
    return $http.get('/api/posts?page='+page).then(function(result){
      return result.data;
    });
  };
  this.getByProfile = function(page, userid) {
    return $http.get('/api/posts?page='+page+'&userId='+userid).then(function(result){
      return result.data;
    });
  };

  this.getByWaterbody = function(page, waterbody) {
    return $http.get('/api/posts?page='+page+'&waterbody='+waterbody+'&typeOfPost=report').then(function(result){
      return result.data;
    });
  };

  this.addLike = function(postId, userId) {
    return $http.put('/api/posts/' + postId, { $addToSet: { likes: userId } })
    .then(function(result) {
      return result.data;
    });
  };


});
