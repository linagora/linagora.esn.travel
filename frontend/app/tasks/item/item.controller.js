(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel').controller('TravelTaskItemController', TravelTaskItemController);

  function TravelTaskItemController(travelTasksService) {
    var self = this;

    self.$onInit = $onInit;
    self.boardValidation = boardValidation;
    self.managerValidation = managerValidation;
    self.bookHotel = bookHotel;
    self.bookTransport = bookTransport;
    self.transmitTravellingTickets = transmitTravellingTickets;

    function $onInit() {
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
