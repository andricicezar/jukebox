angular.module("screenPlaylist")
  .directive("screenPlaylist", ["animate", "appState", "ws", "highlightFilter",
    function(animate, appState, ws, highlightFilter) {
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

            angular.element("#search-box").click(function() {
              angular.element(".playlist-container").css("display", "none");
              angular.element(".search-container").css("display", "block");
            });

            scope.playlist = appState.playlist;
            scope.voteSong = ws.voteSong;
            scope.highlight = highlightFilter;
          }
      };
    }
  ])
  ;
