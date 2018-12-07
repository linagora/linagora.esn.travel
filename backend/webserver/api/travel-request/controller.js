module.exports = dependencies => {
  const client = require('../../../lib/apiClient')(dependencies);
  const logger = dependencies('logger');

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
    client(req.user).list(req.user.preferredEmail)
      .then(travels => {
        if (!travels || !travels['travel-requests'] || !travels['travel-requests']['travel-request']) {
          return res.status(200).json([]);
        }

        return res.status(200).json(travels['travel-requests']['travel-request']);
      })
      .catch(err => {
        logger.error('Error while getting travel requests', err);

        return res.status(500).json({});
      });
  }

  function listTasks(req, res) {
    client(req.user).listTasks(req.user.preferredEmail)
    .then(tasks => {
      if (!tasks || !tasks['travel-requests'] || !tasks['travel-requests']['travel-request']) {
        return res.status(200).json([]);
      }

      return res.status(200).json(tasks['travel-requests']['travel-request']);
    })
    .catch(err => {
      logger.error('Error while getting travel requests', err);

      return res.status(500).json({});
    });
  }

  function create(req, res) {
    const travel = req.body;

    travel.traveller = req.user.preferredEmail;
    travel.enquirer = req.user.preferredEmail;
    travel['project-id'] = travel.projectId;
    travel['start-date'] = travel.start;
    travel['end-date'] = travel.end;

    client(req.user).create(travel)
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

    client(req.user).managerApproval(req.params.id, approval)
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

    client(req.user).boardApproval(req.params.id, approval)
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

    client(req.user).bookHotel(req.params.id, book)
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

    client(req.user).bookTickets(req.params.id, book)
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

    client(req.user).transfertTickets(req.params.id, book)
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
