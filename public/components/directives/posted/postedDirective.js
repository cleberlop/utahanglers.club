angular.module('utahClub').directive('postedDirective', function(postService, userService) {
  return {
    templateUrl: 'components/directives/posted/postedTemplate.html',
    scope: {
      posts: "=",
    },
    controller: function($scope) {


      userService.getMe().then(function(response){
        $scope.currentUser = response;
      });

      $scope.addLike = function(postId){
        postService.addLike(postId, $scope.currentUser).then(function(result){
        });
      };





    }
  };
});
