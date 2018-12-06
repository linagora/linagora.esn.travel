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
        'start-date': '2018-11-19',
        'end-date': '2018-11-22',
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
        'start-date': '2018-11-25',
        'end-date': '2018-11-28',
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

module.exports = dependencies => {

  return {
    create,
    list,
    listTasks
  };

  function create(travel) {
    //travels.push(travel);

    return Promise.resolve(travel);
  }

  function list() {
    return Promise.resolve(travels['travel-requests']['travel-request']);
  }

  function listTasks() {
    return Promise.resolve(tasks['travel-requests']['travel-request']);
  }
};
