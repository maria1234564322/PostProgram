import React, { useState } from 'react';
import './ClientLayout.css';
import { Outlet, useNavigate } from 'react-router-dom'; // Додано useNavigate
import person from '../../images/person.png';

const ClientLayout = () => {
  const navigate = useNavigate(); // Хук для навігації

  return (
    <>
      <div>
        <div className="appHeader">
          <p className="logo" onClick={() => navigate('/Home')}>
            <span style={{ fontWeight: 'bold' }}>Post</span>
            <span style={{ fontStyle: 'italic' }}>Anim</span>
          </p>
          <div className="buttons">
            <button className="btn-login">Вхід</button>
            <img src={person} alt="person" className="person" />
            <button className="btn-login">Реєстрація</button>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default ClientLayout;
