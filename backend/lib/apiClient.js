const travels = {
  'travel-requests': {
    'travel-request': [
      {
        'request-id': '159',
        state: 'active',
        'manager-approval': 'true',
        'board-approval': 'true',
        'reject-reason': null,

        enquirer: 'bescudie@linagora.com',
        traveller: 'cdeneux@linagora.com',
        'project-id': '14592-05',
        'start-date': '2018-11-19',
        'end-date': '2018-11-22',
        address: '107, rue du Landreau, Nantes'
      }
    ]
  }
};

const tasks = {
  'travel-requests': {
    'travel-request': {
      'request-id': '222',
      'project-id': '14592-05',
      enquirer: 'bescudie@linagora.com',
      'start-date': '2018-11-19T00:00:00.000+01:00',
      'end-date': '2018-11-22T00:00:00.000+01:00',
      'current-step': 'manager-validation'
    }
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
