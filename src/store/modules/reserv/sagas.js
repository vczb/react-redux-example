import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import { addReservSuccess, updateAmountSuccess } from './actions';
import api from '../../../services/api';

function* addToReserv({id}) {
  const tripExists = yield select(
    state => state.reserv.find(trip => trip.id === id)
  );

  const myStock = yield call(api.get, `stock/${id}`);

  const stockAmount = myStock.data.amount;

  const currentStock = tripExists ? tripExists.amount : 0;

  const amount = currentStock + 1;

  if (amount > stockAmount) {
    alert('Lotação máxima para esta viagem!');
    return;
  }

  if (tripExists) {

    yield put(updateAmountSuccess(id, amount));

  }else {
    const res = yield call(api.get, `trips/${id}`);

    const data = {
      ...res.data,
      amount: 1,
    };

    yield put(addReservSuccess(data))
  }
}

function* updateAmount({id, amount}) {
  if(amount < 0) return;

  const myStock = yield call(api.get, `stock/${id}`);

  const stockAmount = myStock.data.amount;

  if (amount > stockAmount) {
    alert('Lotação máxima para esta viagem!');
    return;
  }

  yield put(updateAmountSuccess(id, amount));

}

export default all([
  takeLatest('ADD_RESERV_REQUEST', addToReserv),
  takeLatest('UPDATE_RESERV_REQUEST', updateAmount),
])
