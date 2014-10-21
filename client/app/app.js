angular.module('gmail-angular', [
  'gmail-angular.inbox',
  'gmail-angular.outbox',
  'gmail-angular.trash',
  'gmail-angular.auth',
  'gmail-angular.authServices',
  'gmail-angular.compose',
])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/signin');
})