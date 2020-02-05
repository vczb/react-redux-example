import React from 'react';
import { useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import './style.css';

export default function Reservas() {
  const reserv = useSelector(state => state.reserv);

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
        <span>Quantidade: {r.amount}</span>
        <button
        type="button"
        onClick={()=> {}}
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
