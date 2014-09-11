angular.module("screenConnecting")
  .directive("searchingBars", [
    function() {
      return {
        restrict: 'C',
        templateUrl: 'components/screen-connecting/searching-bars/searching-bars.html'
      }
    }
  ])
  ;
