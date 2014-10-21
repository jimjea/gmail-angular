angular.module('gmail-angular.outboxServices', [])

.factory('Outbox', function($http) {
  var fetchOutbox = function(username) {
    return $http({
      type: 'POST',
      url: 'api/outbox',
      data: username
    })
    .success(function(data, status) {
      console.log('success');
    })
    .error(function(data, status) {
      console.log('error');
    })
  };

  return {
    fetchOutbox: fetchOutbox
  }
})