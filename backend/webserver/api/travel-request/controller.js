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
    client.create(travel)
      .then(created => res.status(201).json(created))
      .catch(err => {
        res.status(500).json({
          error: {
            code: 500,
            reason: err.message
          }
        });
      });
  }

  function managerApproval(req, res) {
    const approval = req.body;

    approval['approved-by'] = req.user.preferredEmail;

    client.managerApproval(approval)
      .then(() => res.status(202).send())
      .catch(err => {
        res.status(500).json({
          error: {
            code: 500,
            reason: err.message
          }
        });
      });
  }

  function boardApproval(req, res) {
    const approval = req.body;

    approval['approved-by'] = req.user.preferredEmail;

    client.boardApproval(approval)
      .then(() => res.status(202).send())
      .catch(err => {
        res.status(500).json({
          error: {
            code: 500,
            reason: err.message
          }
        });
      });
  }

  function bookHotel(req, res) {
    const book = {
      'booked-by': req.user.preferredEmail
    };

    client.bookHotel(book)
      .then(() => res.status(202).send())
      .catch(err => {
        res.status(500).json({
          error: {
            code: 500,
            reason: err.message
          }
        });
      });
  }

  function bookTickets(req, res) {
    const book = {
      'booked-by': req.user.preferredEmail
    };

    client.bookTickets(book)
      .then(() => res.status(202).send())
      .catch(err => {
        res.status(500).json({
          error: {
            code: 500,
            reason: err.message
          }
        });
      });
  }

  function transfertTickets(req, res) {
    const book = {
      'transmitted-by': req.user.preferredEmail
    };

    client.transfertTickets(book)
      .then(() => res.status(202).send())
      .catch(err => {
        res.status(500).json({
          error: {
            code: 500,
            reason: err.message
          }
        });
      });
  }

  function get(req, res) {
    return res.status(200).json({ message: 'controller example' });
  }
};
