(function() {
  'use strict';

  var MODULE_NAME = 'linagora.esn.travel';
  var MODULE_DIR_NAME = '/linagora.esn.travel';

  angular.module(MODULE_NAME)
         .component('travelSubheader', travelSubheader());

  function travelSubheader() {
    var component = {
      templateUrl: MODULE_DIR_NAME + '/app/home/travel-subheader.html'
    };

    return component;
  }

})();
