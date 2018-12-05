(function() {
  'use strict';

  var MODULE_NAME = 'linagora.esn.travel';

  angular.module(MODULE_NAME)
         .controller('travelHomeController', travelHomeController);

   function travelHomeController() {
     this.message = 'Travel home!';
    }
})();
