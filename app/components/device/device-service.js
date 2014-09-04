angular.module("device")
  .service("device", ["$q",
    function($q) {
      var device = this;

      device.getWifiState = function() {
        var deferred = $q.defer();
        deferred.resolve(true);
        return deferred.promise;
      };

      device.getAvailableConnections = function() {
        var deferred = $q.defer();

        deferred.resolve([true, false, false, true]);

        return deferred.promise;
      };
    }
  ])
  ;
