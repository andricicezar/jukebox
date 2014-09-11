angular.module("connectBar")
  .directive("connectBar", [
    function() {
      return {
        restrict: 'E',
        templateUrl: 'components/connect-bar/templates/connect-bar.html'
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

  .directive("bars", [
    function() {
      return {
        restrict: 'C',
        templateUrl: 'components/connect-bar/templates/bars.html',
        controller: function($scope, appState) {
          $scope.availableBars = appState.availableBars;
        }
      }
    }
  ])

  .directive("bar", ["appService",
    function(appService) {
      return {
        restrict: 'C',
        link: function(scope, element) {
          var mc = new Hammer(element[0]);
          mc.on("tap", function() {
            appService.connectToBar(scope.bar, element);
          });
        }
      }
    }
  ])
  ;
