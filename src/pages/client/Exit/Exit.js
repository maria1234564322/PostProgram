import React, { useState } from 'react';
import axios from 'axios';
import './Exit.css';

const Exit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = async () => {
    if (email && password) {
      try {
        const response = await axios.post('https://localhost:7228/User', {
          emailAddress: email,
          password,
        });

        const { token } = response.data;
        localStorage.setItem('token', token);
        window.location.href = 'http://localhost:3000/userOffice';
      } catch (error) {
        alert('Помилка при вході: ' + error.response?.data?.message);
      }
    } else {
      alert('Будь ласка, введіть вашу електронну пошту та пароль');
    }
  };

  const submitEmail = () => {
    if (email) {
      alert('Повідомлення на відновлення паролю надіслано на ' + email);
      closeModal();
    } else {
      alert('Будь ласка, введіть вашу електронну пошту');
    }
  };

  return (
    <div>
      <div className="appHeader">
        <p className="logo">
          <span style={{ fontWeight: 'bold' }}>Post</span>
          <span style={{ fontStyle: 'italic' }}>Anim</span>
        </p>
      </div>
      <div className="backgroundExit">
        <div className="containerExit">
          <h1 className="registrationCaption">Вхід</h1>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              className="inputRegistration"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              className="inputRegistration"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="forgotPassword" onClick={openModal}>
              Забули пароль?
            </p>
          </div>
          <div className="conteinetButton">
            <button className="buttonRegistrationUp" onClick={handleLogin}>
              Увійти
            </button>
          </div>
          <p className="returnRegistration">Повернутись на головну сторінку</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Введіть вашу електронну пошту</h2>
            <input
              type="email"
              id="email"
              className="email"
              placeholder="Ваша електронна пошта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button onClick={submitEmail} className="buttonEmail">
              Підтвердити
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exit;
