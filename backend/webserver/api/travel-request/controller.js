'use strict';

// arguments: dependencies, lib
module.exports = function() {
  return {
    get,
    list,
    create,
    managerApproval,
    boardApproval,
    bookTickets,
    bookHotel,
    transfertTickets
  };

  function list(req, res) {
    return res.status(200).json([]);
  }

  function create(req, res) {
    return res.status(200).json({});
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
