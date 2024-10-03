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
    <>
      <div className="background-exit">
        <div className="container-exit">
          <h1>Вхід</h1>

          <div className="formGroup-exit">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="formGroup-exit">
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="forgotPassword-exit" onClick={openModal}>
              Забули пароль?
            </p>
          </div>
          <div className="conteinetButton-exit">
            <button className="buttonUp-exit" onClick={handleLogin}>
              Увійти
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-exit">
          <div className="modalContent-exit">
            <span className="close-exit" onClick={closeModal}>
              &times;
            </span>
            <h2>Введіть вашу електронну пошту</h2>
            <input
              type="email"
              id="email"
              className="emailemail-exit"
              placeholder="Ваша електронна пошта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button onClick={submitEmail} className="buttonEmail-exit ">
              Підтвердити
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Exit;
