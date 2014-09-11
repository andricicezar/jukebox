angular.module("social")
  .directive("social", [
    function() {
      return {
        restrict: 'E',
        transclude: false,
        templateUrl: 'components/social/templates/social.html'
      };
    }
  ])
  .directive("bubbles", [
    function() {
      return {
        restrict: 'C',
        transclude: false,
        controller: function($scope, appState) {
          $scope.bubbles = appState.connections;
        }
      };
    }
  ])
  .directive("bubble", [
    function() {
      return {
        restrict: 'C',
        transclude: false,
        controller: function($scope, $element, appState, animations) {
          var mc = new Hammer($element[0]);
          mc.on('tap', function() {
            // TODO: open chat if is needed
            
            console.log("yuhu");
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
