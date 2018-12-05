(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')
    .controller('TravelListController', TravelListController);

  function TravelListController(
    _,
    $scope,
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
    self.search = search;

    function $onInit() {
      self.onCreateBtnClick = onCreateBtnClick;
      self.loadMoreElements = infiniteScrollHelper(self, _loadNextItems);
    }

    function _loadNextItems() {
      self.options.offset = self.elements.length;

      return travelApiClient.list(self.options);
    }

    function search(query) {
      self.options = {
        query: query,
        offset: 0,
        limit: DEFAULT_LIMIT
      };
      _reload();
    }

    function _resetInfiniteScroll() {
      self.elements = [];
      self.infiniteScrollCompleted = false;
      self.loadMoreElements = infiniteScrollHelper(self, _loadNextItems);
    }

    function _reload() {
      _resetInfiniteScroll();
      self.loadMoreElements();
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

    function _onTravelCreated(travel) {
      if (!travel) {
        return;
      }

      self.elements.unshift(travel);
    }

    function _onTravelDeleted(travel) {
      _.remove(self.elements, { id: travel.id });
    }
  }
})(angular);
