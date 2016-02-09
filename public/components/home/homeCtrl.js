angular.module('utahClub').controller('homeCtrl', function($scope, homeService) {

  $scope.followingPop = function() {
    homeService.followingPop();
  };


  $scope.followingPop();



});
