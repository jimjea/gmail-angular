angular.module('gmail-angular.authServices', [])

.factory('Auth', function($http, $state) {
  var signup = function(userData) {
    return $http({
      method: 'POST',
      url: 'api/user/signup',
      data: userData
    })
    .success(function(res) {
      console.log('hi')
    })
  };

  return {
    signup: signup
  };
})