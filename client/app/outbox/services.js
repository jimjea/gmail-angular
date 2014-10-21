angular.module('gmail-angular.outboxServices', [])

.factory('Outbox', function($http) {
  var fetchOutbox = function(username) {
    return $http({
      method: 'POST',
      url: 'api/outbox',
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
    fetchOutbox: fetchOutbox
  }
})

// ;(function() {
//   'use strict';

//   angular
//     .module('gmail-angular')
//     .factory('Outbox', Outbox);

//   /* @inject */
//   function Outbox($http) {
//     return {
//       fetchOutbox: fetchOutbox
//     }

//     function fetchOutbox(username) {

//     }
//   }

// }).call(this);