angular.module("screenSocial")
  .directive("bubbles", [
    function() {
      return {
        restrict: 'C',
        transclude: false,
        templateUrl: 'components/screen-social/bubbles/bubbles.html',
        controller: function($scope, appState, animations) {
          $scope.bubbles = appState.connections;

          var aux = angular.element(".bubbles-wrapper");
          var mc = new Hammer(aux[0]);
          mc.get("swipe").set({ direction: Hammer.DIRECTION_VERTICAL });

          mc.on("swipedown", function() {
            animations("closeChat");
          });
        }
      };
    }
  ])
  ;
