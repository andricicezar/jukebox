angular.module("animations")
  .factory("animations", [
    function() {
      return {
        goFromLoadingScreenToBarsScreen: function() {
          var cont = angular.element("#loading-screen");
          var logo = angular.element("#loading-screen .loading-logo");

          var anim = new TimelineLite();
          anim.pause();
          anim.to(cont, 1, { height: "21%", ease: Power3.easeOut});

          var bars = angular.element("#screen-bars .bar");
          for (var i = 0, l = bars.length; i < l; ++i) {
            var el = bars[i];
            anim.to(el, 0.7, { opacity: 1, marginLeft: 0, ease: Power3.easeOut}, "-=0.50");
          }

          return anim;
        }

      }
    }
  ])
  ;
