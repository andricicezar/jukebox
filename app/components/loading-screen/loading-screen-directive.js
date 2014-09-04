angular.module('loadingScreen')
  .directive('loadingScreen', [
    function() {
      return {
        restrict: 'E',
        transclude: false,
        templateUrl: 'components/loading-screen/templates/loading-screen.html'
      };
    }
  ])
  ;
