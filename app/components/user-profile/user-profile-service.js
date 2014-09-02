angular.module('userProfile')
  .factory('userProfile', ["$q",
    function($q) {
      return {

        // TODO:
        tryToInitializeUser: function() {
          var deferred = $q.defer();

          setTimeout(function() {
            deferred.reject();
          }, 3000);

          return deferred.promise;
        }

      }
    }
  ])
  ;
