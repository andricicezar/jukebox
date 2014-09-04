angular.module('sjApp')
  .service('appService', ['device',
    function(device) {
      var $app = this;

      $app.startInitializing = function() {
        device.setWifiState();
      };
    }
  ])
  ;
