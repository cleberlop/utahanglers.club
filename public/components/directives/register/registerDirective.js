angular.module('utahClub').directive('registerDirective', function() {
  return {
    templateUrl: 'components/directives/register/registerTemplate.html',
    controller: function($scope) {
      $scope.registerDropDown = function() {
        $('.ui.dropdown')
          .dropdown({
            maxSelections: 3
          });
      };
      $scope.registerDropDown();

    }
  };
});
