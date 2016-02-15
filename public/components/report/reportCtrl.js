angular.module('utahClub').controller('reportCtrl', function($scope, postService){

  postService.getPosts(1).then(function(response) {
    $scope.posts = response;
  });

$scope.filterByPlace = function(waterbody) {

};

$scope.applyFilters = function(){
  if(!$scope.filterInReport[0]){
    postService.getPosts(1).then(function(response) {
      $scope.posts = response;
    });
  } else {
    postService.getByWaterbody(1, $scope.filterInReport[0]).then(function(response){
      $scope.posts = response;
    });

  }

};

$scope.posts = [];
var page = 1;


$scope.readMore = function() {
  page++;
  postService.getPosts(page).then(function(response) {
    response.forEach(function(post) {
      $scope.posts.push(post);
    });
  });
};


});
