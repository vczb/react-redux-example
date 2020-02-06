import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { MdFlightTakeoff } from 'react-icons/md';
import { addReservRequest } from '../../store/modules/reserv/actions';
import api from '../../services/api';
import  './style.css';

export default function Home(){
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(()=>{

    async function loadAPI(){
      const res = await api.get('trips');
      setTrips(res.data);
    }
    loadAPI();
  }, []);

  function handleAdd(id) {
    dispatch(addReservRequest(id));
  }

  return(
    <div>
      <div className="box" >
        {trips.map(trip =>(
          <li key={trip.id} >
            <img src={trip.image} alt={trip.title}/>
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? 'Disponível' : 'Indisponível'}</span>
            <button
              onClick={()=>{handleAdd(trip.id)}}
              type="button">
              <div>
                <MdFlightTakeoff size={16} color="#FFF"/>
              </div>
              <span>SOLICITAR RESERVA</span>
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}
