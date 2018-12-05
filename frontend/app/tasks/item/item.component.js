(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')

  .component('travelListItem', {
    templateUrl: '/linagora.esn.travel/app/tasks/item/item.html',
    bindings: {
      task: '<'
    }
  });
})(angular);
