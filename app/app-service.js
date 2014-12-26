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
        (function auxiliar() {
          ws.connectTo("ws://192.168.1.22:8081")
            .then(function() {
            }, function() {
              setTimeout(auxiliar, 1000);
            });
        })();
        animate("fromBarsScreenToProfileScreen", {barEl: element});
      };
    }
  ])
  ;
