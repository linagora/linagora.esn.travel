(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')
    .controller('TravelActionTransportBookingController', TravelActionTransportBookingController);

  function TravelActionTransportBookingController(
    $log,
    task,
    travelApiClient,
    notificationFactory
  ) {
    var self = this;

    self.$onInit = $onInit;
    self.book = book;

    function $onInit() {
    }

    function book() {
      travelApiClient.bookTickets(task['request-id']).then(function() {
        $log.debug('Tickets booked');
        notificationFactory.weakInfo('Travel', 'The travel tickets have been booked');
      }).catch(function(err) {
        $log.debug('Error while booking tickets', err);
      });
    }
  }
})(angular);
