angular.module("userProfile")
  .directive("createProfile", [
    function() {
      return {
        restrict: 'E',
        templateUrl: 'components/user-profile/templates/create-profile.html'
      };
    }
  ])
  ;
