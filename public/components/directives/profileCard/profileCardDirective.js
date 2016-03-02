angular.module('utahClub').directive('profileCardDirective', function(userService) {
  return {
    templateUrl: 'components/directives/profileCard/profileCardTemplate.html',
    scope: {
      currentUser: '='
    },
    controller: function($scope, userService) {

      userService.getMe().then(function(response){
        $scope.personLoggedIn = response;
      });
      
      $scope.follow = function(){
        userService.follow($scope.currentUser, $scope.personLoggedIn).then(function(result){
          if ($scope.currentUser.followers.indexOf('thisShowsThatIWasFollowedOnce') === -1 && $scope.currentUser.followers.indexOf($scope.personLoggedIn._id) === -1  ) {
            $scope.currentUser.followers.push('thisShowsThatIWasFollowedOnce');
          }
        });
      };


    }
  };
});
