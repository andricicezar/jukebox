angular.module('userProfile')
  .factory('userProfile', ["$q",
    function($q) {
      return {

        // TODO:
        tryToInitializeUser: function() {
          var deferred = $q.defer();

          setTimeout(function() {
            deferred.reject();
          }, 1000);

          return deferred.promise;
        }

      }
    }
  ])
  ;
