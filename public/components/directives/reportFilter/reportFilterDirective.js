angular.module('utahClub').directive('reportFilterDirective', function() {
  return {
    templateUrl: 'components/directives/reportFilter/reportFilterTemplate.html',
    scope: {
      filterInReport: "=",getFilterByPlace: "&"
    },
    controller: function($scope) {

      $scope.reportDropDown = function() {
        $('.ui.dropdown')
      .dropdown({
        maxSelections: 5
      });
      };

      $scope.reportDropDown();



    }
  };
});
