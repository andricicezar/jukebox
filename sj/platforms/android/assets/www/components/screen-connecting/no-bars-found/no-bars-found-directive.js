angular.module("screenConnecting")
  .directive("noBarsFound", [
    function() {
      return {
        restrict: 'C',
        templateUrl: 'components/screen-connecting/no-bars-found/no-bars-found.html'
      }
    }
  ])
  ;
