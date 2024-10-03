import React, { useState } from 'react';
import axios from 'axios'; // Додано для використання axios
import './Registration.css';

const Registration = () => {
  const [districts, setDistricts] = useState([]);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    surname: '',
    name: '',
    middleName: '',
    phone: '',
    postalCode: '',
    region: '',
    district: '',
    city: '',
    street: '',
    house: '',
  });
  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Оновлюємо стан форми
    setFormData({ ...formData, [name]: value });

    // Перевірка пароля
    if (
      name === 'confirmPassword' ||
      (name === 'password' && formData.confirmPassword)
    ) {
      if (value !== formData.password && name === 'confirmPassword') {
        setPasswordError('Паролі не збігаються');
      } else if (formData.confirmPassword !== value && name === 'password') {
        setPasswordError('Паролі не збігаються');
      } else {
        setPasswordError('');
      }
    }
  };

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setFormData({ ...formData, region });

    switch (region) {
      case 'lviv':
        setDistricts([
          { id: 'lvivskyi', name: 'Львівський' },
          { id: 'drohobychskyi', name: 'Дрогобицький' },
          { id: 'chervonohradskyi', name: 'Червоноградський' },
          { id: 'stryiskyi', name: 'Стрийський' },
          { id: 'sambirskyi', name: 'Самбірський' },
          { id: 'zolochivskyi', name: 'Золочівський' },
          { id: 'yavorivskyi', name: 'Яворівський' },
        ]);
        break;
      case 'chernivtsi':
        setDistricts([
          { id: 'vizhnitskyi', name: 'Вижницький' },
          { id: 'dnistrovskyi', name: 'Дністровський' },
          { id: 'chernivetskyi', name: 'Чернівецький' },
        ]);
        break;

      default:
        setDistricts([]);
        break;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://localhost:7228/User/registerUser',
        formData
      );
      debugger;
      if (response.status === 200) {
        alert('Користувача успішно зареєстровано');
      }
    } catch (error) {
      console.error('Помилка реєстрації користувача', error);
    }
  };

  return (
    <div>
      <div className="background-registration">
        <div className="container-registration">
          <h1 className="caption-registration">Реєстрація</h1>

          <form onSubmit={handleFormSubmit}>
            <div className="formGroup-registration">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="input-registration"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="formGroup-registration">
              <label htmlFor="password">Пароль:</label>
              <input
                type="password"
                id="password"
                name="password"
                className="input-registration"
                value={formData.password}
                onChange={handleInputChange}
                pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}"
                title="Пароль має містити щонайменше 8 символів, включаючи літери та цифри."
                required
              />
              {passwordError && (
                <span className="error-message">{passwordError}</span>
              )}
            </div>
            <div className="formGroup-registration">
              <label htmlFor="confirmPassword">Повторіть пароль:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="input-registration"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              {passwordError && (
                <span className="error-message">{passwordError}</span>
              )}
            </div>
            <div className="formGroup-registration">
              <label htmlFor="surname">Прізвище:</label>
              <input
                type="text"
                id="surname"
                name="surname"
                className="input-registration"
                value={formData.surname}
                onChange={handleInputChange}
              />
            </div>
            <div className="formGroup-registration">
              <label htmlFor="name">Ім'я:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input-registration"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="formGroup-registration">
              <label htmlFor="middleName">По-батькові:</label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                className="input-registration"
                value={formData.middleName}
                onChange={handleInputChange}
              />
            </div>
            <div className="formGroup-registration">
              <label htmlFor="phone">Телефон:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="input-registration"
                value={formData.phone}
                onChange={handleInputChange}
                pattern="0\d{9}" // Валідація для 0 та 9 цифр
                title="Телефонний номер має починатися з 0 і містити 10 цифр."
                required
              />
            </div>
            <div className="formGroup-registration">
              <label htmlFor="postalCode">Поштовий індекс:</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                className="input-registration"
                value={formData.postalCode}
                onChange={handleInputChange}
                pattern="\d{5}" // Валідація для 5 цифр
                title="Неправильний поштовий індекс"
                required
              />
              <button type="button" className="button-registration">
                Знайти індекс
              </button>
            </div>
            <div className="formGroup-registration">
              <label htmlFor="region">Область:</label>
              <select
                id="region"
                name="region"
                className="input-registration"
                value={formData.region}
                onChange={handleRegionChange}
              >
                <option value="">Область</option>
                <option value="vinnytsia">Вінницька</option>
                <option value="volyn">Волинська</option>
                <option value="dnipro">Дніпропетровська</option>
                <option value="zhytomyr">Житомирська</option>
                <option value="zakarpattia">Закарпатська</option>
                <option value="ivano-frankivsk">Івано-Франківська</option>
                <option value="kiev">Київська</option>
                <option value="kropyvnytskyi">Кіровоградська</option>
                <option value="lviv">Львівська</option>
                <option value="mykolaiv">Миколаївська</option>
                <option value="odessa">Одеська</option>
                <option value="poltava">Полтавська</option>
                <option value="rivne">Рівненська</option>
                <option value="sumy">Сумська</option>
                <option value="ternopil">Тернопільська</option>
                <option value="kharkiv">Харківська</option>
                <option value="khmelnytskyi">Хмельницька</option>
                <option value="kherson">Херсонська</option>
                <option value="cherkasy">Черкаська</option>
                <option value="chernihiv">Чернігівська</option>
                <option value="chernivtsi">Чернівецька</option>
              </select>
            </div>
            <div className="formGroup-registration">
              <label htmlFor="district">Район:</label>
              <select
                id="district"
                name="district"
                className="input-registration"
                value={formData.district}
                onChange={handleInputChange}
              >
                <option value="">Район</option>
                {districts.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="formGroup-registration">
              <label htmlFor="city">Населений пункт:</label>
              <input
                type="text"
                id="city"
                name="city"
                className="input-registration"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="formGroup-registration">
              <label htmlFor="street">Вулиця:</label>
              <input
                type="text"
                id="street"
                name="street"
                className="input-registration"
                value={formData.street}
                onChange={handleInputChange}
              />
            </div>
            <div className="formGroup-registration">
              <label htmlFor="house">Будинок:</label>
              <input
                type="text"
                id="house"
                name="house"
                className="input-registration"
                value={formData.house}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="button-registration">
              Зареєструватися
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
