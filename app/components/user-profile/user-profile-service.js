angular.module('userProfile')
  .factory('userProfile', [
    function() {
      return {
        tryToInitializeUser: function() {
          console.log('exists!');
        }
      }
    }
  ])
  ;
