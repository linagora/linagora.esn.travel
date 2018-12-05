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
  }
})(angular);
