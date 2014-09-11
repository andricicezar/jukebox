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
            console.log("dada");
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
