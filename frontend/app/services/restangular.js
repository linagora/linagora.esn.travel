'use strict';

angular.module('linagora.esn.travel')

.factory('travelRestangular', function(Restangular, httpErrorHandler) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setFullResponse(true);
    RestangularConfigurer.setBaseUrl('/linagora.esn.travel/api');
    RestangularConfigurer.setErrorInterceptor(function(response) {
      if (response.status === 401) {
        httpErrorHandler.redirectToLogin();
      }

      return true;
    });
  });
});
