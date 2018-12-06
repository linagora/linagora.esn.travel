(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel').factory('travelTasksService', travelTasksService);

  function travelTasksService($modal) {
    return {
      openManagerValidation: openManagerValidation,
      openBoardValidation: openBoardValidation,
      openTransportBooking: openTransportBooking,
      openTicketTransmission: openTicketTransmission,
      openHotelBooking: openHotelBooking
    };

    function openManagerValidation(task) {
      $modal({
        templateUrl: '/linagora.esn.travel/app/tasks/actions/manager-validation.html',
        backdrop: 'static',
        placement: 'center',
        controllerAs: '$ctrl',
        controller: 'TravelActionManagerValidationController',
        resolve: {
          task: function() {
            return task;
          }
        }
      });
    }

    function openBoardValidation(task) {
      $modal({
        templateUrl: '/linagora.esn.travel/app/tasks/actions/board-validation.html',
        backdrop: 'static',
        placement: 'center',
        controllerAs: '$ctrl',
        controller: 'TravelActionBoardValidationController',
        resolve: {
          task: function() {
            return task;
          }
        }
      });
    }

    function openTransportBooking(task) {
      $modal({
        templateUrl: '/linagora.esn.travel/app/tasks/actions/transport-booking.html',
        backdrop: 'static',
        placement: 'center',
        controllerAs: '$ctrl',
        controller: 'TravelActionTransportBookingController',
        resolve: {
          task: function() {
            return task;
          }
        }
      });
    }

    function openTicketTransmission(task) {
      $modal({
        templateUrl: '/linagora.esn.travel/app/tasks/actions/ticket-transmission.html',
        backdrop: 'static',
        placement: 'center',
        controllerAs: '$ctrl',
        controller: 'TravelActionTicketTransmissionController',
        resolve: {
          task: function() {
            return task;
          }
        }
      });
    }

    function openHotelBooking(task) {
      $modal({
        templateUrl: '/linagora.esn.travel/app/tasks/actions/hotel-booking.html',
        backdrop: 'static',
        placement: 'center',
        controllerAs: '$ctrl',
        controller: 'TravelActionHotelBookingController',
        resolve: {
          task: function() {
            return task;
          }
        }
      });
    }
  }
})(angular);
