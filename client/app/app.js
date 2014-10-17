angular.module('gmail-angular', [
  'gmail-angular.inbox'
])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
})