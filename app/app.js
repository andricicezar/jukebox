angular.module('screens', [
  'loadingScreen'
]);

angular.module('sjApp', [
  'sjControllers',
  'screens',
  'connectBar',
  'userProfile',
  'animations'
])
  .config([
    function() {
    }
  ])
  .run([
    function() {
    }
  ])
  ;
