(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel').controller('TravelTaskItemController', TravelTaskItemController);

  function TravelTaskItemController($modal, travelTasksService) {
    var self = this;

    self.$onInit = $onInit;
    self.boardValidation = boardValidation;
    self.managerValidation = managerValidation;
    self.bookHotel = bookHotel;
    self.bookTransport = bookTransport;
    self.transmitTravellingTickets = transmitTravellingTickets;
    self.onTaskClick = onTaskClick;

    function $onInit() {
    }

    function onTaskClick() {
      $modal({
        templateUrl: '/linagora.esn.travel/app/travel/travel.html',
        backdrop: 'static',
        placement: 'center',
        controllerAs: '$ctrl',
        controller: 'TravelController',
        resolve: {
          travel: function() {
            return self.task.clone();
          }
        }
      });
    }

    function managerValidation() {
      travelTasksService.openManagerValidation(self.task);
    }

    function boardValidation() {
      travelTasksService.openBoardValidation(self.task);
    }

    function bookTransport() {
      travelTasksService.openTransportBooking(self.task);
    }

    function transmitTravellingTickets() {
      travelTasksService.openTicketTransmission(self.task);
    }

    function bookHotel() {
      travelTasksService.openHotelBooking(self.task);
    }
  }
})(angular);
