angular.module('screens', [
  'loadingScreen',
  'connectBar',
  'userProfile',
]);

angular.module('sjApp', [
  'sjControllers',
  'screens',
  'scrollableArea',
  'animations'
])
  .config([
    function() {
    }
  ])
  .run([
    function() {
      alert( new Fingerprint().get());
    }
  ])
  ;
