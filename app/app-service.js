angular.module('sjApp')
  .service('appService', ['device', 'appState', '$q', 'animations',
    function(device, appState, $q, animations) {
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
        
        animations("fromBarsScreenToProfileScreen", {barEl: element});
        
      };
    }
  ])
  ;
