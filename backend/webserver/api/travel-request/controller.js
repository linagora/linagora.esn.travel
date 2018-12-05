module.exports = dependencies => {
  const client = require('../../../lib/apiClient')(dependencies);

  return {
    get,
    list,
    listTasks,
    create,
    managerApproval,
    boardApproval,
    bookTickets,
    bookHotel,
    transfertTickets
  };

  function list(req, res) {
    client.list().then(travels => res.status(200).json(travels));
  }

  function listTasks(req, res) {
    client.listTasks().then(tasks => res.status(200).json(tasks));
  }

  function create(req, res) {
    const travel = req.body;

    travel.traveller = req.user.preferredEmail;
    travel['has-road-transport'] = !!travel.road;
    travel['project-id'] = travel.projectId;
    travel['start-date'] = travel.start;
    travel['end-date'] = travel.end;

    //travel.enquirer = // manager
    client.create(travel).then(created => res.status(201).json(created));
  }

  function managerApproval(req, res) {
    return res.status(200).json({});
  }

  function boardApproval(req, res) {
    return res.status(200).json({});
  }

  function bookHotel(req, res) {
    return res.status(200).json({});
  }

  function bookTickets(req, res) {
    return res.status(200).json({});
  }

  function transfertTickets(req, res) {
    return res.status(200).json({});
  }

  function get(req, res) {
    return res.status(200).json({ message: 'controller example' });
  }
};
