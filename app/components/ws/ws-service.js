angular.module('ws')
  .factory('ws', ["$q", "appState",
    function($q, appState) {
      var Service = {};

      Service.ws = undefined;

      Service.newMessage = function(message) {
        console.log(message.message);
        switch (message.message) {
          case 'res-queue':
            angular.copy(message.queue, appState.jukebox);
            break;
          case 'res-playlist':
            angular.copy(message.playlist, appState.playlist);
            break;
          case 'res-current-song':
            angular.copy(message.song, appState.currentSong);
            break;
        };
      };

      Service.connectTo = function(link) {
        var defer = $q.defer();

        Service.ws = new WebSocket(link);

        Service.ws.onopen = function() {
          Service.ws.send('{"message":"req-playlist"}');
          Service.ws.send('{"message":"req-current-song"}');
          Service.ws.send('{"message":"req-queue"}');
          defer.resolve();
        };

        Service.ws.onclose = function() {
          defer.reject();
        };

        Service.ws.onmessage = function(message) {
          Service.newMessage(JSON.parse(message.data));
        };

        return defer.promise;
      };

      return Service;
    }
  ])
  ;
