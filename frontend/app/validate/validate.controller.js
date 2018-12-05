(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')
    .controller('TravelValidateController', TravelValidateController);

  function TravelValidateController(travelApiClient) {
    var self = this;

    self.validate = validate;

    function validate() {
      var validate = self.type === 'board' ? travelApiClient.approveRequestByBoard : travelApiClient.approveRequestByManager;

      validate(self.travel).then(function() {
        console.log('Validated');
      });
    }
  }
})(angular);
