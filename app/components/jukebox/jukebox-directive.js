angular.module("jukebox")
  .directive("jukebox", ["animations",
    function(animations) {
      return {
        restrict: 'E',
        transclude: false,
        templateUrl: 'components/jukebox/templates/jukebox.html',
        link: function(scope, element) {
          var ic = element.find("#icon-playlist");
          var mc = new Hammer(ic[0]);
          mc.on('tap', function() {
            animations("openPlaylist");
          });
        }
      };
    }
  ])
  ;
