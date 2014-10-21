angular.module('gmail-angular.inboxServices', [])

.factory('Inbox', function($http) {
  var fetchInbox = function(username) {
    return $http({
      method: 'POST',
      url: 'api/inbox',
      data: username
    })
    .success(function(data, status) {
      return data;
    })
    .error(function(data, status) {
      return status;
    })
  };

  return {
    fetchInbox: fetchInbox
  }
})