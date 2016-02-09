var app = angular.module('utahClub');

app.service('homeService', function($http) {

  this.followingPop = function() {
    $('.popUpper')
      .popup({
        position: 'top center',
      });
  };




});
