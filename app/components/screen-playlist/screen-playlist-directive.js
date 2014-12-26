angular.module("screenPlaylist")
  .directive("screenPlaylist", ["appState", "ws", "highlightFilter",
    function(appState, ws, highlightFilter) {
      return {
        restrict: 'E',
        templateUrl: 'components/screen-playlist/screen-playlist.html',
        transclude: false,

        link:
          function(scope, element) {
            angular.element("#search-box").click(function() {
              angular.element(".playlist-container").css("display", "none");
              angular.element(".search-container").css("display", "block");
              angular.element("#scroll-container").scrollTop(0);
            });



            scope.playlist = appState.playlist;
            scope.voteSong = ws.voteSong;
            scope.highlight = highlightFilter;
          },

        controller:
          function($scope, animate) {
            $scope.closePlaylist = function() {
              animate("closePlaylist");
            };
            $scope.searching = function() {
              angular.element("#scroll-container").scrollTop(0);
            };
          }
      };
    }
  ])
  ;
