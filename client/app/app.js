angular.module('gmail-angular', [
  'gmail-angular.inbox',
  'gmail-angular.inboxServices',
  'gmail-angular.outbox',
  'gmail-angular.trash',
  'gmail-angular.auth',
  'gmail-angular.authServices',
  'gmail-angular.compose',
  'gmail-angular.composeServices',
])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/signin');
})