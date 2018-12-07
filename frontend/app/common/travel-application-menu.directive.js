(function() {
  'use strict';

  var MODULE_NAME = 'linagora.esn.travel';

  angular.module(MODULE_NAME)
         .directive('travelApplicationMenu', travelApplicationMenu);

  function travelApplicationMenu(applicationMenuTemplateBuilder) {
    var directive = {
      restrict: 'E',
      template: applicationMenuTemplateBuilder('/#/travel', { url: '/linagora.esn.travel/images/app.png' }, 'Travel'),
      replace: true
    };

    return directive;
  }
})();
