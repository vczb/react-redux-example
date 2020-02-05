import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './style.css';

export default function Header(){
  const reservSize = useSelector(state => state.reserv.length);
  return(
    <header className="container" >
      <Link to="/">
        <img className="logo" src={logo} alt="Logo do Projeto" />
      </Link>
      <Link className="reserv" to="/reserv">
        <div>
          <strong>Minhas reservas</strong>
          <span>{reservSize} Reservas</span>
        </div>
      </Link>
    </header>
  );
}
