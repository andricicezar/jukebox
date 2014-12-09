angular.module("animate")
  .factory("animationsControl", ["animations", "$timeout",
    function(animations, $timeout) {
      var callApply = function() {
        $timeout(function() {}, 0);
      };

      var closeChatAnimations;

      var controller = {
        fromBarsScreenToProfileScreen: function(anim, options) {
          if ( angular.element(".current-bar").length == 0) {
            options.barEl.addClass("current-bar");
            animations[anim].play().call(callApply);
          }
        },

        openChat: function(anim, options) {
          if (angular.element("#screen-social").css("top") != "0px") {
            animations[anim].time(0).play().call(callApply);
          }
        },

        closeChat: function(anim, options) {
          if (!closeChatAnimations) {
            closeChatAnimations = animations[anim]();
          }
/*
          var topx = 40;
          var currentx = parseInt(angular.element("#screen-social").css("top").replace("px", ""));
          var bottomx = angular.element("#C").height() - angular.element(".bubbles-wrapper").height();
          var height = angular.element("#screen-social .bubbles-wrapper").height();
          var anim_length = 0.3;

          if (options && currentx < bottomx) {
            if (currentx == topx && options.distance < 40) {
              return;
            }
            currentx = topx + options.distance;
            currentx = Math.max(topx, Math.min(currentx, bottomx));

            var value = anim_length * (currentx-topx) / (bottomx-topx);
            if (options.isFinal) {
              if (value < anim_length/5) {
                closeChatAnimations.reversed(true).resume();
              } else {
                closeChatAnimations.reversed(false).resume();
              }
            } else {
              closeChatAnimations.reversed(false).pause().time(value);
            }
          } else {
            closeChatAnimations.reversed(false).play();
          }
*/
          closeChatAnimations.time(0).play().call(callApply);
        }



      };

      return function(anim, options) {
        if (controller[anim]) {
          controller[anim](anim, options);
        } else if (typeof animations[anim] == "function") {
          animations[anim]();
        } else {
          animations[anim].time(0).play().call(callApply);
        }
      };
    }
  ])
  ;
