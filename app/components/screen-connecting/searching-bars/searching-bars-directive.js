angular.module("screenConnecting")
  .directive("searchingBars", [
    function() {
      return {
        restrict: 'C',
        templateUrl: 'components/screen-loading/searching-bars/searching-bars.html'
      }
    }
  ])
  ;
