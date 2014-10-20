angular.module('gmail-angular.authServices', [])

.factory('Auth', function($http, $state) {
  var signup = function(userData) {
    return $http({
      method: 'POST',
      url: 'api/user/signup',
      data: userData
    })
    .then(function(res) {
      return res.data
    })
  };

  var signin = function(userData) {
    return $http({
      method: 'POST',
      url: 'api/user/signin',
      data: userData
    })
    .then(function(res) {
      return res.data
    })
  };

  return {
    signup: signup,
    signin: signin
  };
})