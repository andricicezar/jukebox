angular.module("screenConnecting")
  .directive("barsFound", [
    function() {
      return {
        restrict: 'C',
        templateUrl: 'components/screen-connecting/bars-found/bars-found.html',
        controller: ["$scope", "appState",
          function($scope, appState) {
            $scope.availableBars = appState.availableBars;
          }
        ]
      }
    }
  ])
  ;
