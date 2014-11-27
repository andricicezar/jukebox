angular.module("screenConnecting")
  .directive("openWifi", [
    function() {
      return {
        restrict: 'C',
        templateUrl: 'components/screen-connecting/open-wifi/open-wifi.html'
      }
    }
  ])
  ;
