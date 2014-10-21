angular.module('gmail-angular.inbox', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('inbox', {
      url: '/inbox',
      templateUrl: 'app/inbox/inbox.html',
      controller: 'InboxController'
    })
})

.controller('InboxController', function($scope, $state, $window, Inbox) {
  var username = $window.localStorage.getItem('username') + '@jimmail.com';
  $scope.data = {username: username};
  $scope.toInbox = function() {
    $state.go('inbox');
  };
  $scope.fetch = function() {
    Inbox.fetchInbox($scope.data)
      .success(function(data) {
        if (data.length > 0) {
          $scope.emails = data;
        } else {
          $scope.emails = [{username: 'Inbox Empty'}];
        }
      })
  };
  $scope.fetch();
})