angular.module("screenProfile")
  .directive("screenProfile", [
    function() {
      return {
        restrict: 'E',
        templateUrl: 'components/screen-profile/screen-profile.html'
      };
    }
  ])
  ;
