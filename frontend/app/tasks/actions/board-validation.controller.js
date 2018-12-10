(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')
    .controller('TravelActionBoardValidationController', TravelActionBoardValidationController);

  function TravelActionBoardValidationController(
    task,
    travelApiClient,
    $log,
    $rootScope,
    notificationFactory
  ) {
    var self = this;

    self.$onInit = $onInit;
    self.validate = validate;
    self.reject = reject;

    function validate() {
      travelApiClient.approveRequestByBoard(task['request-id'], true).then(function() {
        $log.debug('Validated');
        notificationFactory.weakInfo('Travel', 'The travel has been validated');
      }).catch(function(err) {
        $log.debug('Error while validating', err);
      }).finally(function() {
        $rootScope.$broadcast('travel:tasks:updated', self.travel);
      });
    }

    function reject() {
      travelApiClient.approveRequestByBoard(task['request-id'], false).then(function() {
        $log.debug('Rejected');
        notificationFactory.weakInfo('Travel', 'The travel has been rejected');
      }).catch(function(err) {
        $log.debug('Error while rejecting', err);
      }).finally(function() {
        $rootScope.$broadcast('travel:tasks:updated', self.travel);
      });
    }

    function $onInit() {
    }
  }
})(angular);
