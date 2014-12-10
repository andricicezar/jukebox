angular.module('ws')
  .factory('ws', ["$q", "appState", "$rootScope",
    function($q, appState, $rootScope) {
      var Service = {};

      Service.ws = undefined;

      Service.newMessage = function(message) {
        console.log(message.message);

        switch (message.message) {
          case 'res-current-song':
            message.message = "evt-current-song";
            break;
        };

        switch (message.message) {

          case 'res-playlist':
            angular.copy(message.playlist, appState.playlist);
            break;

          case 'evt-current-song':
            if (message.current_song == null) {
              angular.copy({song_id: -1}, appState.currentSong);
            } else {
              angular.copy(message.current_song, appState.currentSong);
            }
            break;

          case 'evt-vote-added':
            appState.songVoteAdded(message.vote.song_id, message.vote.timestamp);
            break;

          case 'res-vote':
            if (message.vote.status == "voted" || message.vote.status == "proposed") {
              appState.songSuccessfulVoted(message.vote.song_id);
              break;
            }

            console.log("Some error");
            break;
        };
      };

      Service.connectTo = function(link) {
        var defer = $q.defer();

        Service.ws = new WebSocket(link);

        Service.ws.onopen = function() {
          Service.ws.send('{"message":"req-playlist"}');
          Service.ws.send('{"message":"req-current-song"}');

          defer.resolve();
        };

        Service.ws.onclose = function() {
          defer.reject();
        };

        Service.ws.onmessage = function(message) {
          $rootScope.$apply(function() {
            Service.newMessage(JSON.parse(message.data));
          });
        };

        return defer.promise;
      };

      Service.voteSong = function(song_id) {
        Service.ws.send('{"message":"req-vote", "vote":{"song_id":'+song_id+' }}');
      };

      return Service;
    }
  ])
  ;
