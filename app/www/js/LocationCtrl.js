/**
 <hr>
 * Created by Tunç on 7/10/13.
 */


function LocationCtrl($scope) {
    $scope.getGeolocation = function() {
        var onSuccess = function(position) {
            $scope.location_state = "Your Location";
            $scope.latitude = position.coords.latitude;
            $scope.longitude = position.coords.longitude;
            $scope.accuracy = position.coords.accuracy;
            $scope.altitude = position.coords.altitude;
            $scope.altitude_accuracy = position.coords.altitudeAccuracy;

            $scope.$apply();
        };

      function onError(error) {
          $scope.location_state = "Location could not be gathered";
          $scope.$apply();
      }
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    $scope.getGeolocation();





}


