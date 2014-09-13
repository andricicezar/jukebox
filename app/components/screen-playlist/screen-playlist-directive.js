angular.module("screenPlaylist")
  .directive("screenPlaylist", ["animations", "appState",
    function(animations, appState) {
      return {
        restrict: 'E',
        templateUrl: 'components/screen-playlist/screen-playlist.html',
        transclude: false,

        link: function(scope, element) {
          var ic = element.find("#icon-playlist-close");
          var mc = new Hammer(ic[0]);

          mc.on('tap', function() {
            animations("closePlaylist");
          });

          scope.playlist = appState.playlist;
        }
      };
    }
  ])
  ;
