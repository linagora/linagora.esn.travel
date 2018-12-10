(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')
    .controller('TravelTasksController', TravelTasksController);

  function TravelTasksController(
    travelApiClient,
    $timeout,
    $scope
  ) {
    var self = this;

    self.$onInit = $onInit;

    function $onInit() {
      loadList();

      $scope.$on('travel:tasks:updated', function() {
        self.tasks = [];
        $timeout(loadList, 0);
      });
    }

    function loadList() {
      self.loading = true;
      travelApiClient.listTasks().then(function(tasks) {
        self.tasks = tasks;
      }).finally(function() {
        self.loading = false;
      });
    }
  }
})(angular);
