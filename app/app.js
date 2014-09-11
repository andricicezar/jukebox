angular.module('screens', [
  'loadingScreen',
  'connectBar',
  'userProfile',
  'jukebox',
  'playlist',
  'social',
  'chat'
]);

angular.module('sjApp', [
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
