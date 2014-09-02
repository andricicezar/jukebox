angular.module("scrollableArea")
  .directive("scrollableAreaVerticaly", [
    function() {
      function controller($scope, $element, $attrs) {
        $scope.iscroll = new IScroll($element[0], {
          mouseWheel: true
        });

        console.log("dada");
        setTimeout(function() {
          console.log($scope.iscroll.refresh());
        }, 300);
      };

      return {
        restrict: 'C',
        controller: controller
      }
    }
  ])
  ;
