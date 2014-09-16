angular.module("animate")
  .factory("animationsControl", ["animations", "$timeout",
    function(animations, $timeout) {
      var controller = {
        fromBarsScreenToProfileScreen: function(anim, options) {
          if ( angular.element(".current-bar").length == 0) {
            options.barEl.addClass("current-bar");
            playAnimationWithCall(anim);
          }
        }
      };

      function playAnimationWithCall(anim) {
        animations[anim]
          .play()
          .call(function() {
            $timeout(function() {}, 0);
          })
          ;
      }

      return function(anim, options) {
        if (controller[anim]) {
          controller[anim](anim, options);
        } else {
          playAnimationWithCall(anim);
        }
      };
    }
  ])
  ;
