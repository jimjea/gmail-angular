angular.module('gmail-angular', [
  'gmail-angular.inbox',
  'gmail-angular.outbox',
  'gmail-angular.trash',
])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/inbox');
})