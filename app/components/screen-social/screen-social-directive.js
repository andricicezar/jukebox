angular.module("screenSocial")
  .directive("screenSocial", [
    function() {
      return {
        restrict: 'E',
        transclude: false,
        templateUrl: 'components/screen-social/screen-social.html'
      };
    }
  ])
  ;
