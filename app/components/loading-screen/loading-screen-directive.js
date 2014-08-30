angular.module('loadingScreen')
  .directive('loadingScreen', ["userProfile",
    function(userProfile) {
      function link(scope, element, attr) {
        // TODO: animation go to create profile
        // TODO: animation go to search bars
        // TODO: check if profile exists
        if (userProfile.tryToInitializeUser()) {
          // TODO: go to search bars
        } else {
          // TODO: go to create profile
        }
      };

      return {
        restrict: 'E',
        templateUrl: 'components/loading-screen/templates/loading-screen.html',
        link: link
      };
    }
  ])
  ;
