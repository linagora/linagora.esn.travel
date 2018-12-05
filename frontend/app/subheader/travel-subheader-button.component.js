'use strict';

var MODULE_NAME = 'linagora.esn.travel';
var MODULE_DIR_NAME = '/linagora.esn.travel';

angular.module(MODULE_NAME)

  .component('travelSubheaderButton', {
    templateUrl: MODULE_DIR_NAME + '/app/subheader/travel-subheader-button.html',
    bindings: {
      travelDisabled: '<?',
      travelClick: '&?',
      travelIconClass: '@?',
      travelIconText: '@?',
      travelIconPosition: '@?'
    },
    controllerAs: 'ctrl'
  });
