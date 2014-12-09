angular.module('sjApp')
  .service('appService', ['device', 'appState', '$q', 'animate', 'ws',
    function(device, appState, $q, animate, ws) {
      var $app = this;

      $app.startInitializing = function() {
        device.getWifiState()
          .then(function(state) {
            appState.wifiState = state;
          })
          ;
      };

      $app.getAvailableConnections = function() {
        var deferred = $q.defer();

        device.getAvailableConnections()
          .then(function(list) {
            deferred.resolve(list);
          })
          ;

        return deferred.promise;
      };

      $app.connectToBar = function(bar, element) {
        // TODO: connect to bar
        // TODO: animation
        ws.connectTo("ws://localhost:3000");
        animate("fromBarsScreenToProfileScreen", {barEl: element});
      };
    }
  ])
  ;
