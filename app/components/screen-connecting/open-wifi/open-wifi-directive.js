angular.module("screenConnecting")
  .directive("openWifi", [
    function() {
      return {
        restrict: 'C',
        templateUrl: 'components/open-wifi/open-wifi.html'
      }
    }
  ])
  ;
