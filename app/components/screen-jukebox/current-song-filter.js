angular.module("screenJukebox")
  .filter("currentSong", ["$filter",
    function($filter) {
      return function(playlist, currentSong) {
        for (var i = 0, il = playlist.length; i < il; ++i) {
          var song = playlist[i];
          if (song.id == currentSong.song_id) {
            var aux = {};
            angular.copy(song, aux);
            song.votes = 0;
            song.voted = false;
            aux.progress = currentSong.progress;
            return aux;
          }
        }

        angular.element(".song-progress-current").css("width", 0);

      }
    }
  ])
  ;
