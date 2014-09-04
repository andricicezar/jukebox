angular.module("connectBar")
  .controller("barsController", ["$scope", "appState",
    function($scope, appState) {
      $scope.availableBars = appState.availableBars;
    }
  ])
  ;
