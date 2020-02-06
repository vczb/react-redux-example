exports.addReservRequest = function (id) {
  return {
    type: 'ADD_RESERV_REQUEST',
    id,
  }
};
exports.addReservSuccess = function (trip) {
  return {
    type: 'ADD_RESERV_SUCCESS',
    trip,
  }
};

exports.remReserv = function (id) {
  return {
    type: 'REMOVE_RESERV',
    id,
  }
};

exports.updateAmountRequest = function (id, amount) {
  return {
    type: 'UPDATE_RESERV_REQUEST',
    id,
    amount,
  }
};

exports.updateAmountSuccess = function (id, amount) {
  return {
    type: 'UPDATE_RESERV_SUCCESS',
    id,
    amount,
  }
};
