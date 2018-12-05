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
            default: 'travel.home',
            fn: function() {
              return { state: 'travel.home' };
            }
          }
        })
        .state('travel.home', {
          url: '/home',
          controller: 'travelHomeController',
          controllerAs: 'ctrl',
          views: {
            'main@travel': {
              templateUrl: MODULE_DIR_NAME + '/app/home/travel-main.html'
            }
          }
        })
        .state('travel.tasks', {
          url: '/tasks',
          views: {
            'main@travel': {
              template: '<travel-tasks/>'
            }
          }
        });
    });
})();
