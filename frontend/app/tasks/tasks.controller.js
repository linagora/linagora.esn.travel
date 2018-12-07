(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')
    .controller('TravelTasksController', TravelTasksController);

  function TravelTasksController(
    travelApiClient
  ) {
    var self = this;

    self.$onInit = $onInit;

    function $onInit() {
      loadList();
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
