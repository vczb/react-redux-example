exports.addReserv = function (trip) {
  return {
    type: 'ADD_RESERV',
    trip,
  }
};

exports.remReserv = function (id) {
  return {
    type: 'REMOVE_RESERV',
    id,
  }
};
