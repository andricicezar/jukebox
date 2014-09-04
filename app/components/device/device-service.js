angular.module("device")
  .service("device", ["appState", "$q",
    function(appState, $q) {
      var device = this;

      device.setWifiState = function() {
        appState.wifiState = true;
      };

      device.getWifiConnections = function() {
        var deferred = $q.defer();

        deferred.resolve([0]);

        return deferred.promise;
      };
    }
  ])
  ;
