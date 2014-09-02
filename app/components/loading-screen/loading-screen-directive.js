angular.module('loadingScreen')
  .directive('loadingScreen', ["userProfile",
    function(userProfile) {
      function link(scope, element, attr) {
        userProfile.tryToInitializeUser().then(
          scope.goFromLoadingScreenToSearchBarsScreen,
          scope.goFromLoadingScreenToBarsScreen
        );
      };

      return {
        restrict: 'E',
        transclude: false,
        templateUrl: 'components/loading-screen/templates/loading-screen.html',
        link: link
      };
    }
  ])
  ;
