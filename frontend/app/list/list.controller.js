(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')
    .controller('TravelListController', TravelListController);

  function TravelListController(
    _,
    $modal,
    infiniteScrollHelper,
    travelApiClient
  ) {
    var self = this;
    var DEFAULT_LIMIT = 20;

    self.options = {
      offset: 0,
      limit: DEFAULT_LIMIT
    };

    self.$onInit = $onInit;

    function $onInit() {
      self.onCreateBtnClick = onCreateBtnClick;
      self.loadMoreElements = infiniteScrollHelper(self, _loadNextItems);
    }

    function _loadNextItems() {
      self.options.offset = self.elements.length;

      return travelApiClient.list(self.options);
    }

    function onCreateBtnClick() {
      $modal({
        templateUrl: '/linagora.esn.travel/app/create/create.html',
        backdrop: 'static',
        placement: 'center',
        controllerAs: '$ctrl',
        controller: 'TravelCreateController'
      });
    }
  }
})(angular);
