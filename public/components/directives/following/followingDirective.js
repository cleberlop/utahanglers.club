angular.module('utahClub').directive('followingDirective', function(userService) {
  return {
    templateUrl: 'components/directives/following/followingTemplate.html',
    controller: function($scope, userService, $state) {

      $scope.getTheFollowing = function() {
        if ($state.current.name === 'Profile') {
          userService.findUser($scope.user._id).then(function(result) {
            $scope.peopleFollowing = result.following;
            $scope.followingResult = [];
            $scope.peopleFollowing.forEach(function(entry) {
              userService.findUser(entry).then(function(response) {
                $scope.followingResult.push(response);
              });
            });
          });
        } else if ($state.current.name === 'Home') {
          userService.getMe().then(function(result) {
            $scope.peopleFollowing = result.following;
            $scope.followingResult = [];
            $scope.peopleFollowing.forEach(function(entry) {
              userService.findUser(entry).then(function(response) {
                $scope.followingResult.push(response);
              });
            });
          });
        }
      };
      $scope.getTheFollowing();
    }
  };
});
