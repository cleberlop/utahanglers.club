angular.module('utahClub').directive('newPostDirective', function() {
  return {
    templateUrl: 'components/directives/newPost/newPostTemplate.html',
    controller: function($scope) {
      $scope.ratingFunc = function() {
        $('.ui.rating')
       .rating();
      };
      $scope.ratingPop = function() {
        $('.rateThePlace')
      .popup({
        position : 'top center',
      });};

      $scope.reportDropDown = function() {
        $('.ui.dropdown')
      .dropdown({
        maxSelections: 3
      });
      };
      $scope.postModal = function() {
        $(document).ready(function(){
           $('#newPostButton').click(function(){
              $('.fullscreen.modal, #newPostId').modal('show');
           });
      });
      };
      $scope.ratingFunc();
      $scope.ratingPop();
      $scope.reportDropDown();
      $scope.postModal();

    }
  };
});
