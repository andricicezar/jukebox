angular.module("screenConnecting")
  .directive("screenConnecting", [
    function() {
      return {
        restrict: 'E',
        templateUrl: 'components/screen-connecting/templates/screen-connecting.html'
      }
    }
  ])

  .directive("searchBars", [
    function() {
      return {
        restrict: 'C',
        templateUrl: 'components/connect-bar/templates/search-bars.html'
      }
    }
  ])

  .directive("searchingBars", [
    function() {
      return {
        restrict: 'C',
        templateUrl: 'components/connect-bar/templates/searching-bars.html'
      }
    }
  ])

  .directive("noBars", [
    function() {
      return {
        restrict: 'C',
        templateUrl: 'components/connect-bar/templates/no-bars.html'
      }
    }
  ])

  ;
