angular.module('gmail-angular.authServices', [])

.factory('Auth', function($http, $state, $window) {

  var resolved = [];

  var signup = function(userData) {
    angular.copy([], resolved);
    return $http({
      method: 'POST',
      url: 'api/user/signup',
      data: userData
    })
    .success(function(data, status) {
      $window.localStorage.setItem('username', userData.username);
      resolved.push(true);   
      return status;
    })
    .error(function(data, status) {
      return status;
    })
  };

  var signin = function(userData) {
    angular.copy([], resolved);
    return $http({
      method: 'POST',
      url: 'api/user/signin',
      data: userData
    })
    .success(function(data, status) {
      $window.localStorage.setItem('username', userData.username);
      resolved.push(true); 
      return status;
    })
    .error(function(data, status) {
      return status;
    })
  };

  return {
    resolved: resolved,
    signup: signup,
    signin: signin
  };
})