angular.module("screenPlaylist")
  .directive("screenPlaylist", ["animate", "appState",
    function(animate, appState) {
      return {
        restrict: 'E',
        templateUrl: 'components/screen-playlist/screen-playlist.html',
        transclude: false,

        link:
          function(scope, element) {
            var ic = element.find("#icon-playlist-close");
            var mc = new Hammer(ic[0]);

            mc.on('tap', function() {
              animate("closePlaylist");
            });

            scope.playlist = appState.playlist;
          }
      };
    }
  ])
  ;
