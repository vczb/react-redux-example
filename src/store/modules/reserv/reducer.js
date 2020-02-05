import produce from 'immer';

export default function reserv(state = [], action, amount ){
  switch (action.type) {
    case 'ADD_RESERV':
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.trip.id);

        if (tripIndex >= 0) {
          draft[tripIndex].amount +=1
          amount += 1;
        }else{
          draft.push({
            ...action.trip,
            amount:1,
          });
        }

      });
    default:
      return state
  }
}
