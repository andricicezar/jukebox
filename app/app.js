angular.module('screens', [
  'screenConnecting',
  'screenJukebox',
  'screenLoading',
  'screenPlaylist',
  'screenProfile',
  'screenSocial',
  'animate',
  'scrollableArea'
]);

angular.module('sjApp', [
  'appState',
  'device',
  'ws',
  'profile',
  'screens',
  'dummy'
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
