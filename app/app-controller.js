angular.module('sjApp')
  .controller('screenController', ['$scope', 'appState', 'appService', 'animations',
    function($scope, appState, appService, animations) {
      $scope.$watch(
        function() { return appState.wifiState; },
        function(newValue, oldValue) {
          console.log(newValue, oldValue);
          if (newValue === false) {
            console.log("here 2");
            // TODO: go to searchBarsScreen
          } else if (newValue === true) {
            console.log("here");
            animations.fromLoginScreenToBarsScreen().play();
            appService.getAvailableConnections();
          }
        }
      );
    }
  ])
  ;
