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
      travelApiClient.listTasks().then(function(tasks) {
        self.tasks = tasks;
      });
    }
  }
})(angular);
