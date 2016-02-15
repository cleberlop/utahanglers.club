angular.module('utahClub').directive('followingDirective', function(userService) {
  return {
    templateUrl: 'components/directives/following/followingTemplate.html',
    controller: function($scope, userService) {

        userService.getMe().then(function(person) {
          $scope.personFollowing = person.following;
          $scope.personFollowing.forEach(function(entry) {
            $scope.followingResult = [];
            userService.findUser(entry).then(function(response){
                $scope.followingResult.push(response);

            });
          });

        });


    }
  };
});
