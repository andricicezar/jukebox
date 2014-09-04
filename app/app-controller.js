angular.module('sjControllers', [])
  .controller('screenController', ['$scope', 'appState', 'appService', 'animations',
    function($scope, appState, appService, animations) {
      $scope.$watch(
        function() { return appState.wifiState; },
        function(newValue, oldValue) {
          if (newValue === false) {
            // TODO: go to searchBarsScreen
          } else if (newValue) {
            animations.fromLoginScreenToBarsScreen().play();
            appService.getAvailableConnections();
          }
        }
      );

      $scope.$watch(
        function() { return appState.availableConnections; },
        function(newValue, oldValue) {
        }
      );
    }
  ])
  ;
