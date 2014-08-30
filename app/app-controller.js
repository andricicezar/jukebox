angular.module('sjControllers', [])
  .controller('screenController', ['$scope',
    function($scope) {
      $scope.goFromLoadingScreenToSearchBarsScreen = function() {
        $scope.loadingScreenExitAnimation();
        // TODO: create animation
        // TODO: destroy loading screen
      };

      $scope.goFromLoadingScreenToCreateProfileScreen = function() {
        $scope.loadingScreenExitAnimation();
        // TODO: create animation
        // TODO: destroy loading screen
      };
    }
  ])
  ;
