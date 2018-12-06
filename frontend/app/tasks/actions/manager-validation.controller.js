(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')
    .controller('TravelActionManagerValidationController', TravelActionManagerValidationController);

  function TravelActionManagerValidationController(
    task,
    travelApiClient,
    $log
  ) {
    var self = this;

    self.$onInit = $onInit;
    self.validate = validate;
    self.reject = reject;

    function validate() {
      travelApiClient.approveRequestByManager(task['request-id'], true).then(function() {
        $log.debug('Validated');
      }).catch(function(err) {
        $log.debug('Error while validating', err);
      });
    }

    function reject() {
      travelApiClient.approveRequestByManager(task['request-id'], false).then(function() {
        $log.debug('Rejected');
      }).catch(function(err) {
        $log.debug('Error while rejecting', err);
      });    }

    function $onInit() {
    }
  }
})(angular);
