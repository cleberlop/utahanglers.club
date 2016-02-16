angular.module('utahClub').directive('postedDirective', function(postService, userService) {
  return {
    templateUrl: 'components/directives/posted/postedTemplate.html',
    scope: {
      posts: "=",
    },
    controller: function($scope) {


      userService.getMe().then(function(response) {
        $scope.currentUser = response;
      });

      var likedOnce = 'thisShowsThatIWasLikedOnce';

      $scope.addLike = function(postId, index) {
        postService.addLike(postId, $scope.currentUser).then(function(result) {
          if ($scope.posts[index].likes.indexOf('thisShowsThatIWasLikedOnce') === -1 && $scope.posts[index].likes.indexOf($scope.currentUser._id) === -1 ) {
            $scope.posts[index].likes.push(likedOnce);
          }
        });

      };





    }
  };
});
