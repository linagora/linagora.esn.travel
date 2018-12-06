(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel').factory('travelApiClient', travelApiClient);

  function travelApiClient($q, travelRestangular) {
    return {
      get: get,
      list: list,
      listTasks: listTasks,
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

    function listTasks() {
      return travelRestangular.all('travel-request').all('tasks').getList().then(_pluck);
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

    function approveRequestByManager(id, approval) {
      return travelRestangular.one('travel-request', id)
        .all('manager-approval').customPOST({
          approval: approval
        }).then(_pluck);
    }

    function approveRequestByBoard(id, approval) {
      return travelRestangular.one('travel-request', id)
        .all('board-approval').customPOST({
          approval: approval
        }).then(_pluck);
    }

    function bookTickets(id) {
      return travelRestangular.one('travel-request', id)
        .all('travelling-tickets').customPOST().then(_pluck);
    }

    function transfertTickets(id) {
      return travelRestangular.one('travel-request', id)
        .all('travelling-tickets').customPOST().then(_pluck);
    }

    function bookHotel(id) {
      return travelRestangular.one('travel-request', id)
        .all('hotel').customPOST().then(_pluck);
    }

  }
})(angular);
