(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')
    .controller('TravelActionTicketTransmissionController', TravelActionTicketTransmissionController);

  function TravelActionTicketTransmissionController(
    $log,
    task,
    travelApiClient,
    notificationFactory
  ) {
    var self = this;

    self.$onInit = $onInit;
    self.transmit = transmit;

    function $onInit() {
    }

    function transmit() {
      travelApiClient.transfertTickets(task['request-id']).then(function() {
        $log.debug('Tickets transferred');
        notificationFactory.weakInfo('Travel', 'The travel tickets have been transferred');
      }).catch(function(err) {
        $log.debug('Error while transferring tickets', err);
      });
    }
  }
})(angular);
