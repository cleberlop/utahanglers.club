angular.module('utahClub').directive('registerDirective', function(userService) {
  return {
    templateUrl: 'components/directives/register/registerTemplate.html',
    controller: function($scope) {

      $scope.clear = function() {
        $(document)
          .ready(function() {
            $('.form').form('clear');
          });
      };

      $scope.checkRequired = function() {
        $(document)
          .ready(function() {
            $('.ui.form')
              .form({
                fields: {
                  profilePic: 'empty',
                  firstName: 'empty',
                  lastName: 'empty',
                  email: ['minLength[6]', 'empty', 'email'],
                  password: ['minLength[6]', 'empty'],
                  gender: 'empty',
                  fishingStyles: 'empty',
                  city: 'empty',
                  region: 'empty'
                }
              });

          });
      };


      $scope.submitIt = function() {
        var validade = $("#registerForm").form('is valid');
        if (validade === true) {
          $scope.createNewUser();
        } else {
          alert('Please fill all required fields');
        }
      };

      $scope.cancelModal = function() {
        $(document).ready(function() {
          $('#registerCancelButton').click(function() {
            $('ui.modal').modal('hide');
          });
        });
      };
      $scope.registerDropDownGender = function() {
        $('#genderDropdown')
          .dropdown({
            action: 'select',
            maxSelections: 1,
            onChange: function(value, text, $selectedItem) {
              $scope.newUser.gender = value;
            }
          });
      };
      $scope.registerDropDownFishing = function() {
        $('#fishingStyleDropdown')
          .dropdown({
            action: 'select',
            onChange: function(value, text, $selectedItem) {
              $scope.newUser.fishingStyle = value;
            }
          });
      };
      $scope.registerDropDownRegion = function() {
        $('#regionDropdown')
          .dropdown({
            action: 'select',
            maxSelections: 1,
            onChange: function(value, text, $selectedItem) {
              $scope.newUser.region = value;
            }
          });
      };
      $scope.addPhotoRegister = function() {
        $("#addPhotoButtonRegister").click(function() {
          $("#registerAddPhoto").trigger('click');
        });
      };


      $scope.newUser = {
        coverPic: $scope.coverPic,
        profilePic: $scope.profilePic,
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        email: $scope.email,
        password: $scope.password, //add security later before lauch
        gender: $scope.gender,
        fishingStyles: $scope.fishingStyle,
        city: $scope.city,
        region: $scope.region,
      };


      $scope.createNewUser = function() {
        userService.createUser($scope.newUser).then(function(user) {
          $('.form').form('clear');
          $('.ui.modal').modal('hide');
          $('#registerAlertModal').modal('show');
        });


      };



      // $scope.alert = function(){
      //   console.log($scope.newUser);
      // };
      $scope.checkRequired();
      $scope.registerDropDownGender();
      $scope.registerDropDownFishing();
      $scope.registerDropDownRegion();
      $scope.addPhotoRegister();

    }
  };
});
