import produce from 'immer';

export default function reserv(state = [], action, amount ){
  switch (action.type) {
    case 'ADD_RESERV_SUCCESS':
      return produce(state, draft => {

        draft.push(action.trip);

      });
    case 'REMOVE_RESERV':
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.id);

        if (tripIndex >= 0) {
          draft.splice(tripIndex, 1);
        }

      });
    case 'UPDATE_RESERV':{

      if (action.amount <= 0) {
        return state;
      }

      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.id);

        if (tripIndex >= 0) {
          draft[tripIndex].amount = Number(action.amount);
        }

      });
    }
      break;
    default:
      return state
  }
}
