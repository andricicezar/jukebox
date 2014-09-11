angular.module('userProfile')
  .factory('userProfile', ["$q",
    function($q) {
      return $this = {
        name: undefined,
        color: undefined,

        // TODO:
        createProfile: function(name, color) {
          var deferred = $q.defer();

          $this.name = name;
          $this.color = color;

          // TODO: check if is uniqe
          deferred.resolve();

          return deferred.promise;
        }
      };
    }
  ])
  ;
