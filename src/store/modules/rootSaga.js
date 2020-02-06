import { all } from 'redux-saga/effects';

import reserv from './reserv/sagas';

export default function* rootSaga(){
  return yield all([
    reserv,
  ])
}
