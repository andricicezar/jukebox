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

        currentSong: [],

        $statusDeferred: undefined,
        status: function() {
          $statusDeferred = $q.defer();
          return $statusDeferred.promise;
        },

        songVoteAdded: function(song_id, timestamp) {
          for (var i = 0, l = appState.playlist.length; i < l; ++i) {
            v = appState.playlist[i];

            if (v.id == song_id) {
                if (!v.votes) v.votes = 0;
                ++v.votes;
                v.timestamp = timestamp;
              break;
            }
          }
        },

        songSuccessfulVoted: function(song_id) {
          for (var i = 0, l = appState.playlist.length; i < l; ++i) {
            v = appState.playlist[i];

            if (v.id == song_id) {
                v.voted = true;
              break;
            }
          }
        }

      };
    }
  ])
  ;
