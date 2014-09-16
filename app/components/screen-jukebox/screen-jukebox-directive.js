angular.module("screenJukebox")
  .directive("screenJukebox", ["animate",
    function(animate) {
      return {
        restrict: 'E',
        transclude: false,
        templateUrl: 'components/screen-jukebox/screen-jukebox.html',
        link: function(scope, element) {
          var ic = element.find("#icon-playlist");
          var mc = new Hammer(ic[0]);
          mc.on('tap', function() {
            animate("openPlaylist");
          });
        }
      };
    }
  ])
  ;
