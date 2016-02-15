angular.module('utahClub').directive('newPostDirective', function(userService, postService) {
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
            position: 'top center',
          });
      };

      $scope.reportDropDown = function() {
        $('.ui.dropdown')
          .dropdown({
            maxSelections: 3
          });
      };
      $scope.postModal = function() {
        $(document).ready(function() {
          $('#newPostButton').click(function() {
            $('.fullscreen.modal, #newPostId').modal('show');
          });
        });
      };
      $scope.addPhoto = function() {
        $("#newPostaddPhotoBtn").click(function() {
          $("#fileAddPhoto").trigger('click');
        });
      };
      $scope.newPost = {
        userId: $scope.userId,
        profilePic: $scope.profilePic,
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        typeOfPost: $scope.typeOfPost,
        postMessage: $scope.postMessage,
        postPic: $scope.postPic,
        rating: $scope.rating,
        waterbody: $scope.waterbody
      };

      userService.getMe().then(function(response){
      $scope.newPost.userId = response._id;
      $scope.newPost.profilePic = response.profilePic;
      $scope.newPost.firstName = response.firstName;
      $scope.newPost.lastName = response.lastName;
      });

      $scope.getRating = function(){
        var res = $('.ui.rating')
        .rating('get rating');
        $scope.newPost.rating = res;
      };


      $scope.createNewPost = function() {
        postService.createPost($scope.newPost).then(function(user) {
          $('.form').form('clear');
          $('.ui.modal').modal('hide');
        });
      };


      $scope.ratingFunc();
      $scope.ratingPop();
      $scope.reportDropDown();
      $scope.postModal();
      $scope.addPhoto();


    }
  };
});
