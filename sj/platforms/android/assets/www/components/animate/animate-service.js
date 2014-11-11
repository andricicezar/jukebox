angular.module("animate")
  .factory("animate", ["$timeout", "animationsControl",
    function($timeout, animationsControl) {
      return function(animation, options) {
        $timeout(function() {
          animationsControl(animation, options);
        }, 0);
      };
    }
  ])
  ;
