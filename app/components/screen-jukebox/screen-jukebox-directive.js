angular.module("screenJukebox")
  .directive("screenJukebox", ["animate", "appState", "jukeboxFilter", "currentSongFilter",
    function(animate, appState, jukeboxFilter, currentSongFilter) {
      return {
        restrict: 'E',
        transclude: false,
        templateUrl: 'components/screen-jukebox/screen-jukebox.html',
        link:
          function(scope, element) {
            var ic = element.find("#icon-playlist");
            var mc = new Hammer(ic[0]);
            mc.on('tap', function() {
              animate("openPlaylist");
            });

            scope.$watch(
              function() { return appState.jukebox; },
              function() {
                scope.jukebox = jukeboxFilter(appState.playlist, appState.jukebox);
              },
              true
            );

            scope.$watch(
              function() { return appState.currentSong.song_id; },
              function() {
                scope.currentSong = currentSongFilter(appState.playlist, appState.currentSong);
              }
            );
          }

      };
    }
  ])
  ;
