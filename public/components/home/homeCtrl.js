angular.module('utahClub').controller('homeCtrl', function($scope, userService, $state, postService) {

  $scope.logOut = function() {
    userService.logOut().then(function(response) {
      $state.go('Login');
    });
  };
  $scope.posts = [];
  var page = 1;
  postService.getPosts(1).then(function(response) {
    $scope.posts = response;
  });
  $scope.readMore = function() {
    page++;
    postService.getPosts(page).then(function(response) {
      response.forEach(function(post) {
        $scope.posts.push(post);
      });
    });
  };
  userService.getMe().then(function(response){
  });
});
