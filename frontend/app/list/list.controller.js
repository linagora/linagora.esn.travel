(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')
    .controller('TravelListController', TravelListController);

  function TravelListController(
    $modal,
    travelApiClient
  ) {
    var self = this;

    self.$onInit = $onInit;

    function $onInit() {
      self.onCreateBtnClick = onCreateBtnClick;
      self.onDetailsClick = onDetailsClick;

      travelApiClient.list().then(function(travels) {
        self.travels = travels;
      });
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

    function onDetailsClick(travel) {
      $modal({
        templateUrl: '/linagora.esn.travel/app/travel/travel.html',
        backdrop: 'static',
        placement: 'center',
        controllerAs: '$ctrl',
        controller: 'TravelController',
        resolve: {
          travel: function() {
            return travel.clone();
          }
        }
      });
    }
  }
})(angular);
