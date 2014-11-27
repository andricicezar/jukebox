angular.module("scrollableArea")
  .directive("scrollableAreaDPlaylist", ["$timeout", "$interval", "appState",
    function($timeout, $interval, appState) {
      function updateContent(el, data) {
        console.log(el, data);
        console.log(data.length, data);
        appState.paginatePlaylist = data;
      };

      function link(scope, element, attrs) {
        appState.paginatePlaylist = appState.playlist.slice(0, 20);
        (function(element) {
          $timeout(function() {
            element.iscroll = new IScroll(element[0], {
              mouseWheel: true,
              infiniteElements: '#screen-playlist .scrollable-area .song',
              dataset: function(start, count) {
                console.log(start, count);
                var data = [];
                angular.copy(appState.playlist, data);
                console.log(data);
                data = data.slice(start-1, start-1+count);
                this.updateCache(start, data);
              },
              dataFiller: updateContent,
              cacheSize: 20
            });
          }, 0);
        })(element);

        scope.$watch(
          function() { return element.find(".content").height() + " " + element.height(); },
          function(newValue) {
            $timeout(function() {
              if (element.iscroll) {
                element.iscroll.refresh();
              }
            }, 0);
          }
        );
      };

      return {
        restrict: 'C',
        link: link
      }
    }
  ])
  ;
