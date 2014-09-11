angular.module("playlist")
  .directive("playlist", ["animations",
    function(animations) {
      return {
        restrict: 'E',
        templateUrl: 'components/playlist/templates/playlist.html',
        transclude: false,
        link: function(scope, element) {
          var ic = element.find("#icon-playlist-close");
          var mc = new Hammer(ic[0]);

          mc.on('tap', function() {
            animations("closePlaylist");
          });
        }
      };
    }
  ])
  ;
