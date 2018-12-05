(function() {
  'use strict';

  var MODULE_NAME = 'linagora.esn.travel';

  angular.module(MODULE_NAME)
    .config(travelApplicationMenu);

  function travelApplicationMenu(dynamicDirectiveServiceProvider) {
    var home = new dynamicDirectiveServiceProvider.DynamicDirective(true, 'travel-application-menu');

    dynamicDirectiveServiceProvider.addInjection('esn-application-menu', home);
  }
})();
