(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')
    .controller('TravelController', TravelController);

  function TravelController(travel) {
    var self = this;

    self.travel = travel;
  }
})(angular);
