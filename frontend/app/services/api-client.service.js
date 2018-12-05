(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel').factory('travelApiClient', travelApiClient);

  function travelApiClient($q, session) {
    return {
      list: list
    };

    function list(options) {
      return $q.when([{
        id: 1,
        name: 'SICTIAM Training',
        enquirer: session.user.preferredEmail
      }]);
    }
  }
})(angular);
