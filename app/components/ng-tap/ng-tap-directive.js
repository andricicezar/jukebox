angular.module('sjApp')
  .directive('ngTap', function() {
    return function(scope, element, attrs) {

      var mc = new Hammer(element[0]);
      mc.on("tap", function() {
        scope.$apply(attrs['ngTap'], element);
      });

      element.click(function() {
        scope.$apply(attrs['ngTap'], element);
      });

    };
  });

