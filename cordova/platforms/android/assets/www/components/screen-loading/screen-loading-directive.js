angular.module('screenLoading')
  .directive('screenLoading', [
    function() {
      return {
        restrict: 'E',
        transclude: false,
        templateUrl: 'components/screen-loading/screen-loading.html'
      };
    }
  ])
  ;
