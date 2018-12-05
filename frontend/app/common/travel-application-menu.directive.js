(function() {
  'use strict';

  var MODULE_NAME = 'linagora.esn.travel';

  angular.module(MODULE_NAME)
         .directive('travelApplicationMenu', travelApplicationMenu);

  function travelApplicationMenu(applicationMenuTemplateBuilder) {
    var directive = {
      restrict: 'E',
      template: applicationMenuTemplateBuilder('/#/travel', 'mdi-emoticon-happy', 'Travel'),
      replace: true
    };

    return directive;
  }
})();
