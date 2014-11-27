angular.module("appState")
  .factory("appState", [
    function() {
      return appState = {
        wifiState: undefined,

        availableConnections: undefined,
        availableBars: [],

        currentConnection: {},
        connections: [],

        playlist: [],
        jukebox: [],
        jukeboxCached: [],

        currentSong: [],

        $statusDeferred: undefined,
        status: function() {
          $statusDeferred = $q.defer();
          return $statusDeferred.promise;
        },

        songVoteAdded: function(song_id) {
          var isInJukebox = false;
          for (var i = 0, l = appState.jukeboxCached.length; i < l; ++i) {
            v = appState.jukeboxCached[i];

            if (v.id == song_id) {
              ++v.votes;
              isInJukebox = true;
              break;
            }
          }

          if (isInJukebox) return;
        },

        songSuccessfulVoted: function(song_id) {
          for (var i = 0, l = appState.jukeboxCached.length; i < l; ++i) {
            v = appState.jukeboxCached[i];

            if (v.id == song_id) {
              v.voted = true;
              break;
            }
          }
        },
      };
    }
  ])
  ;
