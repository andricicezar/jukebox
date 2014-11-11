angular.module("screenConnecting")
  .directive("bar", ["appService",
    function(appService) {
      return {
        restrict: 'C',
        link: function(scope, element) {
          var mc = new Hammer(element[0]);
          mc.on("tap", function() {
            appService.connectToBar(scope.bar, element);
          });
        }
      }
    }
  ])
  ;
