angular.module('gmail-angular.compose', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('compose', {
      url: '/compose',
      templateUrl: 'app/compose/compose.html',
      controller: 'ComposeController'
    })
})

.controller('ComposeController', function($scope, $state, $window, Compose) {
  var username = $window.localStorage.getItem('username') + '@jimmail.com';
  var subject = "(no subject)";
  $scope.emailData = {
    username: username,
    subject: subject
  };
  $scope.newEmail = function() {
    $state.go('compose');
  };
  $scope.sendMail = function() {
    Compose.composedMail($scope.emailData)
      .success(function() {
        $state.go('inbox');
      })
  }
})