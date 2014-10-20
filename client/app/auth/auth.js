angular.module('gmail-angular.auth', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('auth', {
      url: '/auth',
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    })
})

.controller('AuthController', function($scope, $state, Auth) {
  $scope.userinfo = {};
  $scope.signup = function() {
    Auth.signup($scope.userinfo)
      .success(function() {
        $state.go('inbox');
      })
  };
})