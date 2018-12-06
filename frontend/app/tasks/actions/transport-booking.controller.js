(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')
    .controller('TravelActionTransportBookingController', TravelActionTransportBookingController);

  function TravelActionTransportBookingController(
    $log,
    task,
    travelApiClient
  ) {
    var self = this;

    self.$onInit = $onInit;
    self.book = book;

    function $onInit() {
    }

    function book() {
      travelApiClient.bookTickets(task['request-id']).then(function() {
        $log.debug('Tickets booked');
      }).catch(function(err) {
        $log.debug('Error while booking tickets', err);
      });
    }
  }
})(angular);
