angular.module('utahClub').controller('profileCtrl', function($scope, $stateParams, user, postService) {

  $scope.user = user;
  $scope.profileId = $stateParams.id;
  $scope.posts = [];
  var page = 1;
  postService.getByProfile(1, $scope.user._id).then(function(response) {
    $scope.posts = response;
  });
  $scope.readMore = function() {
    page++;
    postService.getByProfile(page).then(function(response) {
      response.forEach(function(post) {
        $scope.posts.push(post);
      });
    });
  };
});
