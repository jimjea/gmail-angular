angular.module('gmail-angular', [
  'gmail-angular.inbox',
  'gmail-angular.outbox',
])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/inbox');
})