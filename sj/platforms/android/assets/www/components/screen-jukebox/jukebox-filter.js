angular.module("screenJukebox")
  .filter("jukebox", ["$filter",
    function($filter) {
      return function(playlist, jukebox) {
        var results = [];

        for (var i = 0, il = jukebox.length; i < il; ++i) {
          var jksong = jukebox[i];
          for (var j = 0, jl = playlist.length; j < jl; ++j) {
            var plsong = playlist[j];

            if (jksong.song_id == plsong.id) {
              var aux = {};
              angular.copy(plsong, aux);
              aux.votes = jksong.votes;
              results.push(aux);
            }
          }
        }

        angular.copy($filter('orderBy')(results, "votes", true), results);

        return results;
      }
    }
  ])
  ;
