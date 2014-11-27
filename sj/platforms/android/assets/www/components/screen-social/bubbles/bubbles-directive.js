angular.module("screenSocial")
  .directive("bubbles", ["appState", "animate",
    function(appState, animate) {
      return {
        restrict: 'C',
        transclude: false,
        templateUrl: 'components/screen-social/bubbles/bubbles.html',
        link: function(scope) {
          scope.bubbles = appState.connections;

          var social = angular.element(".bubbles-wrapper");
          var mc = new Hammer(social[0]);
//          mc.get("pan").set({ direction: Hammer.DIRECTION_VERTICAL });
          mc.get("swipe").set({ direction: Hammer.DIRECTION_VERTICAL });
/*
          mc.on("pan", function(e) {
            animate("closeChat", {
              isFinal: e.isFinal,
              direction: e.angle<0,
              distance: e.deltaY
            });
          });
*/

          mc.on("swipedown", function() {
            console.log("swipedown");
            animate("closeChat");
          });
        }
      };
    }
  ])
  ;
