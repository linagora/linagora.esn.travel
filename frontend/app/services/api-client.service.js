(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel').factory('travelApiClient', travelApiClient);

  function travelApiClient($q, session) {
    return {
      list: list,
      create: create,
      getProjects: getProjects
    };

    function list(options) {
      return $q.when([{
        id: 1,
        name: 'SICTIAM Training',
        enquirer: session.user.preferredEmail
      }]);
    }

    function getProjects() {
      return $q.when([
        {
          id: '1',
          name: 'OpenPaaS - 92001'
        },
        {
          id: '2',
          name: 'Petals - 92002'
        }
      ]);
    }

    function create(travel) {
      console.log('Creating travel request', travel);
      return $q.when();
    }
  }
})(angular);
