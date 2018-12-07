(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')
    .component('travelConfigForm', {
      templateUrl: '/linagora.esn.travel/app/config-form/config-form.html',
      bindings: {
        configurations: '='
      }
    });

})(angular);
