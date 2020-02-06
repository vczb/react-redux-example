import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';
import { remReserv,updateAmountRequest } from '../../store/modules/reserv/actions';
import './style.css';

export default function Reservas() {
  const dispatch  = useDispatch();
  const reserv    = useSelector(state => state.reserv);

  function handleRemove(id){
    dispatch(remReserv(id))
  }

  function decrementAmount(trip) {
    dispatch(updateAmountRequest(trip.id, trip.amount - 1 ))
  }

  function incrementAmount(trip) {
    dispatch(updateAmountRequest(trip.id, trip.amount + 1 ))
  }

  return (
   <div>
    <h1 className="title">Voce solicitou {reserv.length} reservas</h1>

    {reserv.map(r => (

      <div className="reserv" key={r.id}>
        <img
        src={r.image}
        alt={r.title}
        />
        <strong>{r.title}</strong>

        <div id="amount">
          <button
          type="button"
          onClick={()=> decrementAmount(r) }   >
            <MdRemoveCircle size={25} color="#191919" />
          </button>
          <input type="text" readOnly value={r.amount} />
          <button
          type="button"
          onClick={()=> incrementAmount(r) }   >
            <MdAddCircle size={25} color="#191919" />
          </button>
        </div>

        <button
        type="button"
        onClick={()=> handleRemove(r.id)}
        >
          <MdDelete size={20} color="#191919" />
        </button>
      </div>

    ))}

    <footer>
      <button type="button">Solicitar Reservas</button>
    </footer>

   </div>
 );
}
