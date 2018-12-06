(function() {
  'use strict';

  var MODULE_NAME = 'linagora.esn.travel';
  var MODULE_DIR_NAME = '/linagora.esn.travel';

  angular.module(MODULE_NAME)
    .config(function($stateProvider) {
      $stateProvider
        .state('travel', {
          url: '/travel',
          views: {
            '': {
              templateUrl: MODULE_DIR_NAME + '/app/home/travel-home.html'
            }
          },
          deepStateRedirect: {
            default: 'travel.home.requests',
            fn: function() {
              return { state: 'travel.home.requests' };
            }
          }
        })
        .state('travel.home', {
          url: '',
          controller: 'travelHomeController',
          controllerAs: 'ctrl',
          views: {
            'main@travel': {
              templateUrl: MODULE_DIR_NAME + '/app/home/travel-main.html'
            }
          }
        })
        .state('travel.home.requests', {
          url: '/requests',
          views: {
            'tab@travel.home': {
              template: '<travel-list/>'
            }
          }
        })
        .state('travel.home.tasks', {
          url: '/tasks',
          views: {
            'tab@travel.home': {
              template: '<travel-tasks/>'
            }
          }
        });
    });
})();
