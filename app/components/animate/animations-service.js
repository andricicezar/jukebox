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
          anim.pause();

          anim.addCallback(function(anim) {
            var v = angular.element("#screen-loading");
            var oE = new optimizeElements();
            oE.activateHardwareAccelaration(v);

            var screenBars = angular.element("#screen-bars");
            screenBars.css("display", "block");
            var bars = screenBars.find(".bar");

            for (var i = 0, l = bars.length; i < l; ++i) {
              oE.activateHardwareAccelaration(bars[i]);
              anim.to(bars[i], 0.7, {
                opacity: 1,
                marginLeft: 0,
                ease: Power3.easeOut
              }, 0.5+0.2*i);
            }
          }, 0, [anim]);

          anim.to("#screen-loading", 1, {
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

            var lScreen = angular.element("#screen-loading");
            var titleHeight = currentBar.find(".title").height() + parseInt(currentBar.css("margin-bottom").replace("px", ""));
            var clone = currentBar.clone();

            (function(currentBar, clone) {
              anim.addCallback(function(){
                angular.element("#screen-connecting").prepend(clone);
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

              angular.element("#screen-connecting")
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
          anim.pause();

          anim.addCallback(function(anim) {
            var barLogo = angular.element("#screen-connecting");
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
          anim.pause();

          anim.addCallback(function(anim) {
            var oE = new optimizeElements();
            var barLogo = angular.element("#screen-connecting");
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
          anim.pause();

          anim.to("#screen-social", 0.3, {
            top: "40px"
          }, 0);

          return anim;
        }(),





        closeChat: function() {
          var anim = new TimelineMax();
          anim.pause();

          anim.addCallback(function() {
            var social = angular.element("#screen-social");
            social.css("top", "40px");
          }, 0);

          anim.to("#screen-social", 0.3, {
            top: angular.element("#C").height() - angular.element(".bubbles-wrapper").height()
          }, 0);

          return anim;
        },




        fromCreateProfileToJukebox: function() {
          angular.element("#create-profile").css("display", "none");
          angular.element("#screen-loading").css("display", "none");
          angular.element("#screen-connecting").css("display", "none");

          angular.element("#screen-social").css("display", "block");
          angular.element("#screen-jukebox").css("display", "block");
          angular.element("#screen-playlist").css("display", "block");
        },




        openPlaylist: function() {
          var anim = new TimelineMax();
          anim.pause();

          var effect = angular.element("#effect");
          var playlist = angular.element("#screen-playlist");

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

          var playlist = angular.element("#screen-playlist");
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
