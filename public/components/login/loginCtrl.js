angular.module('utahClub').controller('loginCtrl', function($scope, loginService){

$scope.signerUpModal = function() {
  loginService.signUpModal();
};

$scope.checkerEmail = function() {
  loginService.checkEmail();
};

$scope.signerUpModal();
$scope.checkerEmail();


});
