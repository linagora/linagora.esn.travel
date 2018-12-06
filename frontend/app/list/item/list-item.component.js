(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')

  .component('travelListItem', {
    templateUrl: '/linagora.esn.travel/app/list/item/list-item.html',
    bindings: {
      travel: '<',
      onDetailsClick: '&'
    }
  });
})(angular);
