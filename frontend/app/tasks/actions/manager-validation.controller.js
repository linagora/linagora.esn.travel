(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')
    .controller('TravelActionManagerValidationController', TravelActionManagerValidationController);

  function TravelActionManagerValidationController(
    task,
    travelApiClient,
    $log,
    notificationFactory
  ) {
    var self = this;

    self.$onInit = $onInit;
    self.validate = validate;
    self.reject = reject;

    function validate() {
      travelApiClient.approveRequestByManager(task['request-id'], true).then(function() {
        $log.debug('Validated');
        notificationFactory.weakInfo('Travel', 'The travel request has been validated');
      }).catch(function(err) {
        $log.debug('Error while validating', err);
      });
    }

    function reject() {
      travelApiClient.approveRequestByManager(task['request-id'], false).then(function() {
        $log.debug('Rejected');
        notificationFactory.weakInfo('Travel', 'The travel request has been rejected');
      }).catch(function(err) {
        $log.debug('Error while rejecting', err);
      });    }

    function $onInit() {
    }
  }
})(angular);
