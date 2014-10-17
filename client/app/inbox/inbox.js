angular.module('gmail-angular.inbox', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('inbox', {
      url: '/inbox',
      templateUrl: 'app/inbox/inbox.html',
      controller: 'InboxController'
    })
})

.controller('InboxController', function($scope, $state) {
  $scope.toInbox = function() {
    console.log('got here');
    // $state.go('inbox');
  }
})