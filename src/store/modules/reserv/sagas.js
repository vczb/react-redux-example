import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import { addReservSuccess, updateAmountReserv } from './actions';
import api from '../../../services/api';

function* addToReserv({id}) {
  const tripExists = yield select(
    state => state.reserv.find(trip => trip.id === id)
  );
  if (tripExists) {

    const amount = tripExists.amount + 1;

    yield put(updateAmountReserv(id, amount));

  }else {
    const res = yield call(api.get, `trips/${id}`);

    const data = {
      ...res.data,
      amount: 1,
    };

    yield put(addReservSuccess(data))
  }
}

export default all([
  takeLatest('ADD_RESERV_REQUEST', addToReserv)
])
