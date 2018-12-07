(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')
    .controller('TravelListController', TravelListController);

  function TravelListController(
    $scope,
    $timeout,
    $modal,
    travelApiClient
  ) {
    var self = this;

    self.$onInit = $onInit;

    function $onInit() {
      self.onCreateBtnClick = onCreateBtnClick;
      self.onDetailsClick = onDetailsClick;

      $scope.$on('travel:request:created', function() {
        self.travels = [];
        $timeout(loadList, 0);
      });

      loadList();
    }

    function loadList() {
      self.loading = true;
      travelApiClient.list().then(function(travels) {
        self.travels = travels;
      }).finally(function() {
        self.loading = false;
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
