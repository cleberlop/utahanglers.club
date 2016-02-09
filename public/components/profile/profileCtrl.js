angular.module('utahClub').controller('profileCtrl', function($scope, profileService){

  $scope.followingPop = function() {
    profileService.followingPop();
  };


  $scope.followingPop();
















});
