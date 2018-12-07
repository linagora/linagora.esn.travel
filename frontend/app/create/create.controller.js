(function(angular) {
  'use strict';

  var plane = { air: { 'outbound-airport': 'NCE', 'outbound-flight': { company: 'EZ', 'take-off': '2018-11-19', 'flight-reference': 'EZ3454', 'current-price': 34.56 }, 'return-airport': 'CDG', 'return-flight': { company: 'EZ', 'take-off': '2018-11-22', 'flight-reference': 'EZ3455', 'current-price': 143.65 } } };
  var car = { road: { 'from-adress': 'Grasse city', 'to-adress': 'Nice airport', distance: 33 } };
  var train = { railway: { 'outbound-station': 'Cannes', 'outbound-train': { company: 'SNCF', departure: '2018-11-19', 'train-reference': '3454', 'current-price': 34.56 }, 'return-station': 'Marseille', 'return-train': { company: 'OuiGo', 'take-off': '2018-11-22', 'train-reference': '3455', 'current-price': 143.65 } } };

  var mockTransportData = {
    Plane: plane,
    Car: car,
    Train: train
  };

  angular.module('linagora.esn.travel')
    .controller('TravelCreateController', TravelCreateController);

  function TravelCreateController($rootScope, travelApiClient, notificationFactory) {
    var self = this;

    self.travelModes = ['Car', 'Plane', 'Train'];
    self.create = create;
    self.onStartDateChange = onStartDateChange;
    self.onEndDateChange = onEndDateChange;

    travelApiClient.getProjects().then(function(projects) {
      self.projects = projects;
    });

    function create() {
      self.travel = self.travel || {};
      self.travel.transports = mockTransportData[self.travelMode];

      travelApiClient.create(self.travel).then(function() {
        notificationFactory.weakInfo('Travel', 'Your travel request has been sent');
        $rootScope.$broadcast('travel:request:created', self.travel);
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
