angular.module('sjControllers', [])
  .controller('screenController', ['$scope', 'animations',
    function($scope, animations) {
      $scope.goFromLoadingScreenToBarsScreen = function() {
        animations.goFromLoadingScreenToBarsScreen().play();
      }
    }
  ])
  ;
