angular.module("animate")
  .factory("animations", [
    function() {
      var optimizeElements = function() {
        this.elements = [];
      };

      optimizeElements.prototype.activateHardwareAccelaration =
      function(el) {
        angular.element(el).find("*").css({
          "-webkit-transform": "transform3d(0, 0, 0)",
          "-webkit-backface-visibility": "hidden"
        });
        this.elements.push(el);
      };

      optimizeElements.prototype.deactivate =
      function() {
        for (var i = 0, l = this.elements.length; i < l; ++i) {
          var el = this.elements[i];
          angular.element(el).find("*").css({
            "-webkit-transform": "none",
            "-webkit-backface-visibility": "visible"
          });
        }

        this.elements = [];
      };

      return animations = {
        fromLoadingScreenToBarsScreen: function() {
          var anim = new TimelineMax();
          anim.oE = new optimizeElements();

          anim.pause();

          anim.addCallback(function(anim) {
            var v = angular.element("#loading-screen");
            console.log(anim);
            anim.oE.activateHardwareAccelaration(v);

            angular.element("#screen-bars").css("display", "block");
            var bars = angular.element("#screen-bars .bar");
            for (var i = 0, l = bars.length; i < l; ++i) {
              anim.oE.activateHardwareAccelaration(bars[i]);
              anim.to(bars[i], 0.7, {
                opacity: 1,
                marginLeft: 0,
                ease: Power3.easeOut
              }, 0.5+0.2*i);
            }
          }, 0, [anim]);

          anim.to("#loading-screen", 1, {
            height: "15%",
            ease: Power3.easeOut
          }, 0);

          return anim;
        }(),




        fromBarsScreenToProfileScreen: function() {
          var anim = new TimelineMax();
          anim.pause();
          anim.addCallback(function(anim) {
            var oE = new optimizeElements();

            var currentBar = angular.element(".bar.current-bar");

            var lScreen = angular.element("#loading-screen");
            var titleHeight = currentBar.find(".title").height() + parseInt(currentBar.css("margin-bottom").replace("px", ""));
            var clone = currentBar.clone();

            (function(currentBar, clone) {
              anim.addCallback(function(){
                angular.element("#connect-bar").prepend(clone);
                clone.addClass("animatedBar");
                clone.css({
                  position: "absolute",
                  top: currentBar.offset().top,
                  left: currentBar.offset().left,
                  right: currentBar.offset().left,
                  width: "auto",
                  height: currentBar.height(),
                  zIndex: 8999
                });

                clone.find(".title").css("opacity", 0);
              }, 0);
            }(currentBar, clone));

            currentBar = clone;
            oE.activateHardwareAccelaration(lScreen);
            anim.to(lScreen, 0.5, {
              top: -lScreen.height()
            }, 0);

            var bars = angular.element("#screen-bars");
            anim.to(bars, 0.5, {
              opacity: 0
            }, 0);

            anim.addCallback(function() {
              bars.css("display", "none");
            });

            oE.activateHardwareAccelaration(currentBar);
            anim.to(currentBar, 0.5, {
              top: -titleHeight
            }, 0.4);

            anim.to(currentBar, 0.5, {
              left: "0",
              right: "0"
            }, 0.4);

            anim.addCallback(function() {
              angular.element("#create-profile .container")
                .css("top", currentBar.height())
                ;

              angular.element("#connect-bar")
                .css("height", currentBar.height())
                ;

            }, 0.4);


            var createProfile = angular.element("#create-profile");
            oE.activateHardwareAccelaration(createProfile);
            anim.to(createProfile, 0.5, {
              opacity: 1
            }, 0.7);

          }, 0, [anim]);
          return anim;
        }(),




        keyboardUpInCreateProfile: function() {
          var anim = new TimelineMax();

          anim.addCallback(function(anim) {
            var oE = new optimizeElements();
            var barLogo = angular.element("#connect-bar");
            var createProfile = angular.element("#create-profile .container");

            anim.to(barLogo, 0.3, {
              top: -barLogo.height()
            }, 0);

            anim.to(createProfile, 0.3, {
              top: 0
            }, 0);
          }, 0, [anim]);

          return anim;
        }(),




        keyboardDownInCreateProfile: function() {
          var anim = new TimelineMax();
          anim.addCallback(function(anim) {
            var oE = new optimizeElements();
            var barLogo = angular.element("#connect-bar");
            var createProfile = angular.element("#create-profile .container");

            anim.to(barLogo, 0.3, {
              top: 0
            }, 0.3);

            anim.to(createProfile, 0.3, {
              top: barLogo.height()
            }, 0.3);
          }, 0, [anim]);

          return anim;
        }(),




        openChat: function() {
          var anim = new TimelineMax();

          anim.addCallback(function(anim) {
            var oE = new optimizeElements();

            var social = angular.element("#social");
            anim.to(social, 0.3, {
              top: "40px"
            }, 0);
          }, 0, [anim]);

          return anim;
        }(),





        closeChat: function(options) {
          var anim = new TimelineMax();
          var oE = new optimizeElements();
          anim.pause();

          var topx = 40;
          var currentx = parseInt(angular.element("#social").css("top").replace("px", ""));
          var bottomx = angular.element("#C").height() - angular.element(".bubbles-wrapper").height();

          var anim_length = 0.3;

          // ANIMATION
          var social = angular.element("#social");
          anim.to(social, anim_length, {
            top: bottomx
          }, 0);

          // LOGIC
          if (options) {
            if (options.isFinal) {
            } else {
              currentx = topx + (options.direction?-1:1) * options.distance;
              currentx = Math.max(topx, Math.min(currentx, bottomx-topx));
              var value = anim_length / (bottomx - topx) * currentx;
              console.log(topx, currentx, bottomx, value);
              return anim.pause().restart().pause().time(anim_length/3);
            }
          }

          // return anim.play();
        },




        fromCreateProfileToJukebox: function() {
          angular.element("#create-profile").css("display", "none");
          angular.element("#loading-screen").css("display", "none");
          angular.element("#connect-bar").css("display", "none");

          angular.element("#social").css("display", "block");
          angular.element("#jukebox").css("display", "block");
          angular.element("#playlist").css("display", "block");

        },




        openPlaylist: function() {
          var anim = new TimelineMax();

          var effect = angular.element("#effect");
          var playlist = angular.element("#playlist");

          anim.addCallback(function() {
            effect.css("display", "block");
            playlist.css("opacity", 1);
          }, 0);

          anim.to(effect, 0.3, {
            opacity: 0.8,
            ease: Power3.easeOut
          }, 0);

          anim.to(playlist, 0.3, {
            left: "0%",
            ease: Power3.easeOut
          }, 0);

          return anim.play();
        },




        closePlaylist: function() {
          var anim = new TimelineMax();

          var effect = angular.element("#effect");
          anim.to(effect, 0.3, {
            opacity: 0,
            ease: Power1.easeIn
          }, 0);

          var playlist = angular.element("#playlist");
          anim.to(playlist, 0.3, {
            left: "100%",
            ease: Power3.easeOut
          }, 0);

          anim.addCallback(function() {
            effect.css("display", "none");
          });

          return anim.play();
        }
      };

    }
  ])
  ;
