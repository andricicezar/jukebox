angular.module('screens', [
  'loadingScreen',
  'connectBar',
  'userProfile',
]);

angular.module('sjApp', [
  'sjControllers',
  'appState',
  'screens',
  'scrollableArea',
  'device',
  'animations'
])
  .config([
    function() {
    }
  ])
  .run(['$document', 'appService',
    function($document, appService) {
      setTimeout( function() {
        $document.trigger("deviceready");
      }, 500);

      $document.on("deviceready", function() {
        appService.startInitializing();
      });
    }
  ])
  ;
