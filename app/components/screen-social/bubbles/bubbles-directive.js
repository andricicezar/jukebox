angular.module("screenSocial")
  .directive("bubbles", [
    function() {
      return {
        restrict: 'C',
        transclude: false,
        templateUrl: 'components/screen-social/bubbles/bubbles.html',
        controller: function($scope, appState) {
          $scope.bubbles = appState.connections;
        }
      };
    }
  ])
  ;
