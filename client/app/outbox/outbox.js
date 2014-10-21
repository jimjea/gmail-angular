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
  $scope.user = $window.localStorage.getItem('username') + '@jimmail.com';
  $scope.toOutbox = function() {
    $state.go('outbox');
  };
  $scope.getOutbox = function() {
    Outbox.fetchOutbox($scope.user);
  };
  $scope.getOutbox();
})