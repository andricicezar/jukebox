angular.module('sjApp')
  .controller('screenController', ['$scope', 'appState', 'appService', 'animations',
    function($scope, appState, appService, animations) {
      $scope.$watch(
        function() { return appState.wifiState; },
        function(newValue, oldValue) {
          if (newValue === false) {
            // TODO: go to searchBarsScreen
          } else if (newValue === true) {
            appService.getAvailableConnections()
              .then(function(list) {
                if (list.length === 0) {
                  // TODO: go to noBarsScreen
                  return;
                }
                // TODO:
                // check if is any bar
                //   if(no): go to noBarsScreen
                //   else:
                //     if(is connected already to a bar):
                //       go to profileScreen
                //     else:
                //       go to barsScreen
                animations.fromLoadingScreenToBarsScreen().play();
              })
              ;
          }
        }
      );
    }
  ])
  ;
