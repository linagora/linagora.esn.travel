(function(angular) {
  'use strict';

  angular.module('linagora.esn.travel')
    .controller('TravelCreateController', TravelCreateController);

  function TravelCreateController(travelApiClient) {
    var self = this;

    self.create = create;
    self.onStartDateChange = onStartDateChange;
    self.onEndDateChange = onEndDateChange;

    travelApiClient.getProjects().then(function(projects) {
      self.projects = projects;
    });

    function create() {
      travelApiClient.create(self.travel).then(function() {
        console.log('Created');
      });
    }

    function onStartDateChange() {
      console.log(self.travel.start);
    }

    function onEndDateChange() {
      console.log(self.travel.end);
    }
  }
})(angular);
