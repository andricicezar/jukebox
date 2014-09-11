angular.module("scrollableArea")
  .directive("scrollableAreaHorizontally", ["$timeout",
    function($timeout) {
      function link(scope, element, attrs) {
        element.iscroll = new IScroll(element[0], {
          scrollX: true,
          scrollY: false,
          mouseWheel: true
        });

        scope.$watch(
          function() { return element.find(".bubbles").width() + " " + element.width(); },
          function(newValue) {
            $timeout(function() {
              element.iscroll.refresh();
            }, 100);
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
