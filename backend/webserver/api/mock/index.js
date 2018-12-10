const travels = {
  'travel-requests': {
    'travel-request': [
      {
        'request-id': '159',
        state: 'active',
        'manager-approval': 'true',
        'board-approval': 'true',
        'reject-reason': null,

        enquirer: 'user1@open-paas.org',
        traveller: 'user2@open-paas.org',
        'project-id': '14592-05',
        'start-date': '2018-11-19T00:00:00.000Z',
        'end-date': '2018-11-22T00:00:00.000Z',
        address: '107, rue du Landreau, Nantes'
      },
      {
        'request-id': '150',
        state: 'active',
        'manager-approval': 'true',
        'board-approval': 'true',
        'reject-reason': null,

        enquirer: 'user3@open-paas.org',
        traveller: 'user2@open-paas.org',
        'project-id': '14592-05',
        'start-date': '2018-11-25T00:00:00.000Z',
        'end-date': '2018-11-28T00:00:00.000Z',
        address: 'Montpellier'
      }
    ]
  }
};

const tasks = {
  'travel-requests': {
    'travel-request': [
      {
        'request-id': '222',
        'project-id': '14592-05',
        enquirer: 'user2@open-paas.org',
        traveller: 'user1@open-paas.org',
        'start-date': '2018-11-19T00:00:00.000+01:00',
        'end-date': '2018-11-22T00:00:00.000+01:00',
        'current-step': 'manager-validation'
      },
      {
        'request-id': '222',
        'project-id': '14592-05',
        enquirer: 'user2@open-paas.org',
        traveller: 'user1@open-paas.org',
        'start-date': '2018-11-19T00:00:00.000+01:00',
        'end-date': '2018-11-22T00:00:00.000+01:00',
        'current-step': 'board-validation'
      },
      {
        'request-id': '222',
        'project-id': '14592-05',
        enquirer: 'user2@open-paas.org',
        traveller: 'user1@open-paas.org',
        'start-date': '2018-11-19T00:00:00.000+01:00',
        'end-date': '2018-11-22T00:00:00.000+01:00',
        'current-step': 'transportBooking'
      },
      {
        'request-id': '222',
        'project-id': '14592-05',
        enquirer: 'user2@open-paas.org',
        traveller: 'user1@open-paas.org',
        'start-date': '2018-11-19T00:00:00.000+01:00',
        'end-date': '2018-11-22T00:00:00.000+01:00',
        'current-step': 'transmitTravellingTickets'
      },
      {
        'request-id': '222',
        'project-id': '14592-05',
        enquirer: 'user2@open-paas.org',
        traveller: 'user1@open-paas.org',
        'start-date': '2018-11-19T00:00:00.000+01:00',
        'end-date': '2018-11-22T00:00:00.000+01:00',
        'current-step': 'hotelBooking'
      }
    ]
  }
};

module.exports = function(dependencies, router) {

  const logger = dependencies('logger');

  // create a travel request
  router.post('/administrative-offices/travel-request', (req, res) => {
    logger.info('Creating travel request', req.body);

    res.status(204).send();
  });

  router.get('/process-instances/travel-requester/:userEmail', (req, res) => {
    logger.info('Get travel requests for user', req.params.userEmail);

    res.status(200).json(travels);
  });

  router.get('/tasks/tasks/:userEmail', (req, res) => {
    logger.info('Get travel tasks for user', req.params.userEmail);

    res.status(200).json(tasks);
  });

  router.post('/administrative-offices/travel-request/:id/manager-approval', (req, res) => {
    logger.info('manager approve request', req.params.id, req.body);

    res.status(200).send();
  });

  router.post('/administrative-offices/travel-request/:id/board-approval', (req, res) => {
    logger.info('board approve request', req.params.id, req.body);

    res.status(200).send();
  });

  router.post('/administrative-offices/travel-request/:id/hotel', (req, res) => {
    logger.info('Hotel request', req.params.id, req.body);

    res.status(200).send();
  });

  router.post('/administrative-offices/travel-request/:id/travelling-tickets', (req, res) => {
    logger.info('Travelling ticket request', req.params.id, req.body);

    res.status(200).send();
  });

  router.put('/administrative-offices/travel-request/:id/travelling-tickets', (req, res) => {
    logger.info('Transfert tickets', req.params.id, req.body);

    res.status(200).send();
  });
};
