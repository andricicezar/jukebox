angular.module("animations")
  .factory("animations", [
    function() {
      var activateHardwareAcceleration = function(el) {
        angular.element(el).children().css({
          "-webkit-transform": "translate3d(0,0,0)",
          "-webkit-backface-visibility": "hidden"
        });
        return el;
      };

      return {
        fromLoadingScreenToBarsScreen: function() {
          var cont = angular.element("#loading-screen");
          var logo = angular.element("#loading-screen .loading-logo");

          var anim = new TimelineLite();
          anim.pause();
          anim.to(activateHardwareAcceleration(cont), 1, { height: "21%", ease: Power3.easeOut});

          var bars = angular.element("#screen-bars .bar");
          for (var i = 0, l = bars.length; i < l; ++i) {
            var el = bars[i];
            anim.to(activateHardwareAcceleration(el), 0.7, { opacity: 1, marginLeft: 0, ease: Power3.easeOut}, "-=0.5");
          }

          return anim.timeScale(1);
        }

      };
    }
  ])
  ;
