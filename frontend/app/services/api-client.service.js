(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel').factory('travelApiClient', travelApiClient);

  function travelApiClient($q, session) {
    return {
      list: list,
      create: create,
      getProjects: getProjects,
      approveRequestByBoard: approveRequestByBoard,
      approveRequestByManager: approveRequestByManager,
      bookHotel: bookHotel,
      bookTickets: bookTickets,
      transfertTickets: transfertTickets
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
      return $q.when();
    }

    function approveRequestByManager(travel) {
      return $q.when(true);
    }

    function approveRequestByBoard(travel) {
      return $q.when(true);
    }

    function bookTickets(travel) {
      return $q.when(true);
    }

    function transfertTickets(travel) {
      return $q.when(true);
    }

    function bookHotel(travel) {
      return $q.when(true);
    }

  }
})(angular);
