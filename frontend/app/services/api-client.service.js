(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel').factory('travelApiClient', travelApiClient);

  function travelApiClient($q, session, travelRestangular) {
    return {
      get: get,
      list: list,
      create: create,
      getProjects: getProjects,
      approveRequestByBoard: approveRequestByBoard,
      approveRequestByManager: approveRequestByManager,
      bookHotel: bookHotel,
      bookTickets: bookTickets,
      transfertTickets: transfertTickets
    };

    function _pluck(response) {
      return response.data;
    }

    function get(id) {
      return travelRestangular.one('travel-requests', id).get();
    }

    function list(options) {
      return travelRestangular.all('travel-request').getList(options).then(_pluck);
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
      return travelRestangular.all('travel-request').post(travel).then(_pluck);
    }

    function approveRequestByManager(travel) {
      return travelRestangular.one('travel-request', travel.id)
        .all('manager-approval').customPOST().then(_pluck);
    }

    function approveRequestByBoard(travel) {
      return travelRestangular.one('travel-request', travel.id)
        .all('board-approval').customPOST().then(_pluck);
    }

    function bookTickets(travel) {
      return travelRestangular.one('travel-request', travel.id)
        .all('travelling-tickets').customPOST().then(_pluck);
    }

    function transfertTickets(travel) {
      return travelRestangular.one('travel-request', travel.id)
        .all('travelling-tickets').customPOST().then(_pluck);
    }

    function bookHotel(travel) {
      return travelRestangular.one('travel-request', travel.id)
        .all('hotel').customPOST().then(_pluck);
    }

  }
})(angular);
