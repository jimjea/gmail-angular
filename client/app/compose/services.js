angular.module('gmail-angular.composeServices', [])

.factory('Compose', function($http, $state, $window) {

  var composedMail = function(email) {
    return $http({
      method: 'POST',
      url: 'api/compose',
      data: email
    })
    .success(function(data, status) {
      return status;
    })
    .error(function(data, status) {
      return status;
    })
  }

  return {
    composedMail: composedMail
  }
})