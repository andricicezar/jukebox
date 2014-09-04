angular.module("scrollableArea")
  .directive("scrollableAreaVerticaly", [
    function() {
      function link(scope, element, attrs) {
        element.iscroll = new IScroll(element[0], {
          mouseWheel: true
        });

        scope.$watch(
          function() { return angular.element(element[0]).height(); },
          function(newValue, oldValue) {
            element.iscroll.refresh();
          }
        );
      };

      return {
        restrict: 'C',
        link: link
      }
    }
  ])
  ;
