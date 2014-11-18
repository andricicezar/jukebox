angular.module("screenSocial")
  .directive("screenSocial", [
    function() {
      return {
        restrict: 'E',
        transclude: false,
        templateUrl: 'components/screen-social/screen-social.html',
        link:
          function(scope, element) {
            element.css("top", angular.element("#C").height()-element.find(".bubbles-wrapper").height());
          }
      };
    }
  ])
  ;
