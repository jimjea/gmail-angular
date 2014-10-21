angular.module('gmail-angular.auth', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    });
  $stateProvider
    .state('signin', {
      url: '/signin',
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
})

.controller('AuthController', function($scope, $state, Auth) {
  $scope.userinfo = {};
  $scope.signup = function() {
    Auth.signup($scope.userinfo).success(function() {
      $state.go('inbox');
    })
  };
  $scope.signin = function() {
    Auth.signin($scope.userinfo).success(function(data) {
      $state.go('inbox');
    });
  }
})