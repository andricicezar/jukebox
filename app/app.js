angular.module('screens', [
  'loadingScreen'
]);

angular.module('sjApp', [
  'sjControllers',
  'screens',
  'userProfile'
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
