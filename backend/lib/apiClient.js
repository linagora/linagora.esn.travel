const travels = [];

module.exports = dependencies => {

  return {
    create,
    list
  };

  function create(travel) {
    travels.push(travel);

    return Promise.resolve(travel);
  }

  function list() {
    return Promise.resolve(travels);
  }
};
