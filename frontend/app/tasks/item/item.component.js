(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')

  .component('travelTaskItem', {
    templateUrl: '/linagora.esn.travel/app/tasks/item/item.html',
    controller: 'TravelTaskItemController',
    bindings: {
      task: '<'
    }
  });
})(angular);
