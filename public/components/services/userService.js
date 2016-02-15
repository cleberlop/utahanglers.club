angular.module('utahClub').service('userService', function($http, $state) {

var user = {};
  this.createUser = function(user) {
    return $http.post('/api/users', user)
    .then(function(result) {
      return result.data;
    });
  };

  this.login = function(user) {
    return $http.post('/auth/login', user).then(function(response) {
      user = response.data;
      $state.go('Home');
    });
  };
  this.getMe = function() {
    return $http.get('/api/me').then(function(result){
      return result.data;
    });
  };

  this.findUser = function(id) {
    return $http.get('/api/user/' + id).then(function(result){
      return result.data;
    });
  };

  this.logOut = function() {
    return $http.get('/auth/logout').then(function(result){
      return "You are logged out";
    });
  };

  this.follow = function(profileId, userId) {
    return $http.put('/api/users/' + profileId._id, { $addToSet: { followers: userId } }),
    $http.put('/api/users/' + userId._id, { $addToSet: { following: profileId } })
      .then(function(result) {

      return result.data;

    });
  };


});
