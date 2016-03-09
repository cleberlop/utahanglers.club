angular.module('utahClub').directive('navBarDirective', function(userService, postService, $state) {
  return {
    templateUrl: 'components/directives/navBar/navBarTemplate.html',
    controller: function($scope) {

      $scope.logOut = function() {
        userService.logOut().then(function(response) {
          $state.go('Login');
        });
      };
      $scope.currentUser = {};
      $scope.getCurrentUser = function() {
        userService.getMe().then(function(user) {
          $scope.currentUser = user;
        });
      };
      $scope.getCurrentUser();
    }
  };
});
