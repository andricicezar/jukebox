angular.module("appState")
  .factory("appState", [
    function() {
      return {
        wifiState: undefined,

        availableConnections: undefined,
        availableBars: [],

        currentConnection: {},
        connections: [],

        playlist: [],
        jukebox: []
      };
    }
  ])
  ;
