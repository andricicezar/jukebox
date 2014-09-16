angular.module("scrollableArea")
  .directive("scrollableAreaVertically", ["$timeout",
    function($timeout) {
      function link(scope, element, attrs) {
        element.iscroll = new IScroll(element[0], {
          mouseWheel: true
        });

        scope.$watch(
          function() { return element.find(".content").height() + " " + element.height(); },
          function(newValue) {
            $timeout(function() {
              element.iscroll.refresh();
            }, 0);
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
