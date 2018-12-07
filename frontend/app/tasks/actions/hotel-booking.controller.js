(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')
    .controller('TravelActionHotelBookingController', TravelActionHotelBookingController);

  function TravelActionHotelBookingController(
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
      travelApiClient.bookHotel(task['request-id']).then(function() {
        $log.debug('Hotel Booked');
        notificationFactory.weakInfo('Travel', 'The hotel has been booked');
      }).catch(function(err) {
        $log.debug('Error while booking hotel', err);
      });
    }
  }
})(angular);
