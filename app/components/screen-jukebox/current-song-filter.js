angular.module("screenJukebox")
  .filter("currentSong", ["$filter",
    function($filter) {
      return function(playlist, currentSong) {

        for (var i = 0, il = playlist.length; i < il; ++i) {
          var song = playlist[i];
          if (song.song_id == currentSong.id) {
            var aux = {};
            angular.copy(song, aux);
            aux.progress = currentSong.progress;
            aux.length = currentSong.length;
            return aux;
          }
        }

      }
    }
  ])
  ;
