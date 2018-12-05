'use strict';

module.exports = function(dependencies, lib, router) {
  const authorizationMW = dependencies('authorizationMW');
  const controller = require('./controller')(dependencies, lib);
  const middleware = require('./middleware')(dependencies, lib);

  router.get('/travel-request',
    authorizationMW.requiresAPILogin,
    middleware.canGet,
    controller.list);

  router.get('/travel-request/tasks',
    authorizationMW.requiresAPILogin,
    middleware.canGet,
    controller.listTasks);

  router.post('/travel-request',
    authorizationMW.requiresAPILogin,
    controller.create);

  router.post('/travel-request/:id/manager-approval',
    authorizationMW.requiresAPILogin,
    controller.managerApproval);

  router.post('/travel-request/:id/board-approval',
    authorizationMW.requiresAPILogin,
    controller.boardApproval);

  router.post('/travel-request/:id/travelling-tickets',
    authorizationMW.requiresAPILogin,
    controller.bookTickets);

  router.post('/travel-request/:id/hotel',
    authorizationMW.requiresAPILogin,
    controller.bookHotel);

  router.put('/travel-request/:id/travelling-tickets',
    authorizationMW.requiresAPILogin,
    controller.transfertTickets);
};
