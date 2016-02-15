angular.module('utahClub').controller('loginCtrl', function($scope, userService, loginService){

  $scope.login = function(user) {
    userService.login(user);
  };
  $scope.pressEnter = function(keyEvent, user) {
  if (keyEvent.which === 13)
  userService.login(user);
};

$scope.signerUpModal = function() {
  loginService.signUpModal();
};

$scope.checkerEmail = function() {
  loginService.checkEmail();
};


$scope.signerUpModal();
$scope.checkerEmail();


});
