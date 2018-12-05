(function() {
  'use strict';

  var MODULE_NAME = 'linagora.esn.travel';
  var MODULE_DIR_NAME = '/linagora.esn.travel';

  angular.module(MODULE_NAME)
    .factory('travelRestangular', travelRestangular);

  function travelRestangular(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setBaseUrl(MODULE_DIR_NAME + '/api');
      RestangularConfigurer.setFullResponse(true);
    });
  }
})();
