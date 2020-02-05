export default function reserv(state = [], action ){
  // console.log(state);
  switch (action.type) {
    case 'ADD_RESERV':
      return [ ...state, action.trip ]
    default:
      return state
  }
}
