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

exports.updateAmountReserv = function (id, amount) {
  return {
    type: 'UPDATE_RESERV',
    id,
    amount,
  }
};
