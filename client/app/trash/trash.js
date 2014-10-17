angular.module('gmail-angular.trash', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('trash', {
      url: '/trash',
      templateUrl: 'app/trash/trash.html',
      controller: 'TrashController'
    })
})

.controller('TrashController', function($scope, $state) {
  $scope.toTrash = function() {
    $state.go('trash');
  }
})