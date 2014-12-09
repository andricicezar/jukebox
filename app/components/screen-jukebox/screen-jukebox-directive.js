angular.module("screenJukebox")
  .directive("screenJukebox", ["animate", "appState", "currentSongFilter", "ws",
    function(animate, appState, currentSongFilter, ws) {
      return {
        restrict: 'E',
        transclude: false,
        templateUrl: 'components/screen-jukebox/screen-jukebox.html',
        link:
          function(scope, element) {
            scope.jukebox = appState.playlist;

            var ic = element.find("#icon-playlist");
            var mc = new Hammer(ic[0]);
            mc.on('tap', function() {
              animate("openPlaylist");
            });

            scope.$watch(
              function() { return appState.currentSong.song_id; },
              function() {
                scope.currentSong = currentSongFilter(appState.playlist, appState.currentSong);
                if (!scope.currentSong) return;
                  animate("playingSong", {
                    progress: scope.currentSong.progress,
                    length: scope.currentSong.length
                  });
              }
            );

            scope.isHavingVotes = function(song) {
              return song.votes > 0;
            };

            scope.voteSong = ws.voteSong;

          }

      };
    }
  ])
  ;
