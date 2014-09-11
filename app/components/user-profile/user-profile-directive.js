angular.module("userProfile")
  .directive("createProfile", [
    function() {
      return {
        restrict: 'E',
        templateUrl: 'components/user-profile/templates/create-profile.html',
        controller: function($scope, $element, animations, userProfile) {
          $scope.placeHolder = "Skrillex";
          $scope.name = "";
          $scope.color = "#ff0000";

          var input = $element.find('input[type="text"]');
          input.on("focus", function() {
            animations("keyboardUpInCreateProfile");
          });

          input.on("blur", function() {
            animations("keyboardDownInCreateProfile");
          });

          mc = new Hammer(angular.element("#refresh-profile")[0]);
          mc.on("tap", function() {
            $scope.$apply(function($scope) {
              $scope.placeHolder = ["Buddy Guy", "Eric Clapton", "Stefan", "nu te cred"][parseInt(Math.random()*10%4)];
              $scope.color = ["#00ff00", "#0000ff", "#ff00ff", "#00ffff"][parseInt(Math.random()*10%4)];
            });
          });

          mc = new Hammer(angular.element("#submit-profile")[0]);
          mc.on("tap", function() {
            // TODO: start loading
            userProfile.createProfile($scope.name || $scope.placeHolder, $scope.color)
              .then(
                function() {
                  // TODO: animation
                  animations("fromCreateProfileToJukebox");
                },
                function() {
                  // TODO: display error (is taken / connection error / etc.)
                }
              );
          });
        }
      };
    }
  ])
  ;
