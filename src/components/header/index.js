import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import './style.css';

export default function Header(){
  return(
    <header className="container" >
      <Link to="/">
        <img className="logo" src={logo} alt="Logo do Projeto" />
      </Link>
      <Link className="reserv" to="/reserv">
        <div>
          <strong>Minhas reservas</strong>
          <span>0 Reservas</span>
        </div>
      </Link>
    </header>
  );
}
