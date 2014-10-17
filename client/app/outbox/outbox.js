angular.module('gmail-angular.outbox', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('outbox', {
      url: '/outbox',
      templateUrl: 'app/outbox/outbox.html',
      controller: 'OutboxController'
    })
})

.controller('OutboxController', function($scope, $state) {
  $scope.toOutbox = function() {
    $state.go('outbox');
  }
})