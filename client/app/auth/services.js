angular.module('gmail-angular.authServices', [])

.factory('Auth', function($http, $state) {
  var signup = function(userData) {
    return $http({
      method: 'POST',
      url: 'api/user/signup',
      data: userData
    })
    .success(function(data, status) {
      // store username in local storage
      return status
    })
    .error(function(data, status) {
      return status
    })
  };

  var signin = function(userData) {
    return $http({
      method: 'POST',
      url: 'api/user/signin',
      data: userData
    })
    .success(function(data, status) {
      // store username in local storage
      return status
    })
    .error(function(data, status) {
      return status
    })
  };

  return {
    signup: signup,
    signin: signin
  };
})