const axios = require('axios');
let client;

module.exports = dependencies => {
  const logger = dependencies('logger');
  const esnConfig = dependencies('esn-config');

  return {
    create,
    list,
    listTasks,
    managerApproval,
    boardApproval,
    bookHotel,
    bookTickets,
    transfertTickets
  };

  function getClient() {
    if (client) {
      return Promise.resolve(client);
    }

    return getServiceUrl().then(baseURL => axios.create({ baseURL: `${baseURL}/api` }));
  }

  function getServiceUrl() {
    if (process.env.PETALS_BASE_URL) {
      return Promise.resolve(process.env.PETALS_BASE_URL);
    }

    return esnConfig('petalsURL').inModule('linagora.esn.travel').get().then(url => (url ? url : 'http://localhost:8080/linagora.esn.travel'));
  }

  function create(travel) {
    logger.debug('Creating travel request', JSON.stringify(travel));

    return getClient()
      .then(client => client.post('/administrative-offices/travel-request', travel))
      .then(response => response.data);
  }

  function list(userEmail) {
    logger.debug('List travel requests', userEmail);

    return getClient()
      .then(client => client.get(`/process-instances/travel-requester/${userEmail}`))
      .then(response => response.data);
  }

  function listTasks(userEmail) {
    logger.debug('List travel requests', userEmail);

    return getClient()
      .then(client => client.get(`/tasks/tasks/${userEmail}`))
      .then(response => response.data);
  }

  function managerApproval(id, approval) {
    logger.debug('manager approval', JSON.stringify(approval));

    return getClient()
      .then(client => client.post(`/administrative-offices/travel-request/${id}/manager-approval`, approval))
      .then(response => response.data);
  }

  function boardApproval(id, approval) {
    logger.debug('board approval', JSON.stringify(approval));

    return getClient()
      .then(client => client.post(`/administrative-offices/travel-request/${id}/board-approval`, approval))
      .then(response => response.data);
  }

  function bookHotel(id, book) {
    logger.debug('Book hotel', JSON.stringify(book));

    return getClient()
      .then(client => client.post(`/administrative-offices/travel-request/${id}/hotel`, book))
      .then(response => response.data);
  }

  function bookTickets(id, book) {
    logger.debug('Book tickets', JSON.stringify(book));

    return getClient()
      .then(client => client.post(`/administrative-offices/travel-request/${id}/travelling-tickets`, book))
      .then(response => response.data);
  }

  function transfertTickets(id, tickets) {
    logger.debug('Transfert tickets', JSON.stringify(tickets));

    return getClient()
      .then(client => client.put(`/administrative-offices/travel-request/${id}/travelling-tickets`, tickets))
      .then(response => response.data);
  }
};
