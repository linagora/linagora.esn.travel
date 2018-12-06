(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')

  .component('travel', {
    templateUrl: '/linagora.esn.travel/app/travel/travel.html',
    controller: 'TravelController',
    bindings: {
      travel: '<'
    }
  });
})(angular);
