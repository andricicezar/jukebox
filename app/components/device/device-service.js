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

        deferred.resolve([
          {title: "La baza", img_src: "../app-assets/imgs/la_baza.png"},
          {title: "La baza", img_src: "../app-assets/imgs/la_baza.png"},
          {title: "La baza", img_src: "../app-assets/imgs/la_baza.png"}
        ]);

        return deferred.promise;
      };
    }
  ])
  ;
