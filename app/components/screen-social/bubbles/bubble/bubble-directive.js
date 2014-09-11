angular.module("screenSocial")
  .directive("bubble", [
    function() {
      return {
        restrict: 'E',
        transclude: false,
        templateUrl: 'components/screen-social/bubbles/bubble/bubble.html',
        controller: function($scope, $element, appState, animations) {
          var mc = new Hammer($element[0]);
          mc.on('tap', function() {
            // TODO: open chat if is needed

            $scope.$apply(function() {
              animations("openChat");
              angular.copy($scope.bubble, appState.currentConnection);
            });
          });
        }
      };
    }
  ])
  ;
