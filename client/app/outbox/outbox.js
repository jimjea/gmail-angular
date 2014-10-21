angular.module('gmail-angular.outbox', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('outbox', {
      url: '/outbox',
      templateUrl: 'app/outbox/outbox.html',
      controller: 'OutboxController'
    })
})

.controller('OutboxController', function($scope, $state, $window, Outbox) {
  var username = $window.localStorage.getItem('username') + '@jimmail.com';
  $scope.user = {username: username};
  $scope.toOutbox = function() {
    $state.go('outbox');
  };
  $scope.getOutbox = function() {
    Outbox.fetchOutbox($scope.user)
      .success(function(data) {
        $scope.emails = data;
      })
  };
  $scope.getOutbox();
})