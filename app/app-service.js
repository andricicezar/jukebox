angular.module('sjApp')
  .service('appService', ['device', 'appState', '$q',
    function(device, appState, $q) {
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
    }
  ])
  ;
