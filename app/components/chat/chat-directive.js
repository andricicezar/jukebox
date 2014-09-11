angular.module("chat")
  .directive("chat", [
    function() {
      return {
        restrict: 'C',
        templateUrl: "components/chat/templates/chat.html",
        controller: function($scope, $element, appState) {
          $scope.messages = [];
          $scope.$watch(
            function() { return appState.currentConnection; },
            function(newValue) {
              if (newValue) {
                angular.copy(newValue.messages, $scope.messages);
              }
            },
            true
          );
        }
      }
    }
  ])
  ;
