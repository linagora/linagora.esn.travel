(function(angular) {
  'use strict';

  var MODULE_METADATA = {
    id: 'linagora.esn.travel',
    title: 'Travel',
    homePage: 'travel.main',
    icon: '/linagora.esn.travel/images/app.png',
    config: {
      template: 'travel-config-form',
      displayIn: {
        user: false,
        domain: true,
        platform: true
      }
    }
  };

  angular.module('linagora.esn.travel')
    .run(registerModule);

    function registerModule(esnModuleRegistry) {
      esnModuleRegistry.add(MODULE_METADATA);
    }

})(angular);
