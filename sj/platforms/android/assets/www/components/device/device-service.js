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
          {title: "La baza", img_src: "lib/imgs/la_baza.png"},
          {title: "Underground", img_src: "lib/imgs/la_underground.jpg"},
          {title: "Meru", img_src: "lib/imgs/la_meru.png"},
          {title: "La baza", img_src: "lib/imgs/la_baza.png"}
        ]);

        return deferred.promise;
      };
    }
  ])
  ;
