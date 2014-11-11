angular.module("chat")
  .directive("chat", [
    function() {
      return {
        restrict: 'C',
        templateUrl: "components/screen-social/chat/chat.html",
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
