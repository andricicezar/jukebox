angular.module('loadingScreen')
  .directive('loadingScreen', ["userProfile",
    function(userProfile) {
      function link(scope, element, attr) {
        if (userProfile.tryToInitializeUser()) {
          scope.goFromLoadingScreenToSearchBarsScreen();
        } else {
          scope.goFromLoadingScreenToCreateProfileScreen();
        }
      };

      function controller($scope, $element) {
        $scope.loadingScreenExitAnimation = function() {
          var v = $element[0].getElementsByTagName("h1");
          TweenMax.to(v, 2, {"line-height": 0});
        };
      };

      return {
        restrict: 'E',
        transclude: false,
        templateUrl: 'components/loading-screen/templates/loading-screen.html',
        link: link,
        controller: controller
      };
    }
  ])
  ;
