import React from 'react';

const DocumentShipment = () => {
  return (
    <>
      <h2 className="h">Тип документа</h2>
      <input placeholder="Назва документа" className="estimatedValue" />

      <div className="switch-container">
        <h2 className="h">Пакування</h2>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="switch-container">
        <h2 className="h">Зворотна доставка</h2>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>

      <h2 className="h">Послуга упаковки товару</h2>
      <div className="shipping-options">
        <label className="custom-radio">
          <input type="radio" name="packingService" value="yes" />
          <span className="custom-radio-btn"></span>
          Так
        </label>
        <label className="custom-radio">
          <input type="radio" name="packingService" value="no" />
          <span className="custom-radio-btn"></span>
          Ні
        </label>
      </div>

      <h2 className="h">Місце відправки</h2>
      <div className="shipping-options">
        <label className="custom-radio">
          <input type="radio" name="dispatchLocation" value="відділення" />
          <span className="custom-radio-btn"></span>
          Відділення
        </label>
        <label className="custom-radio">
          <input type="radio" name="dispatchLocation" value="адреса" />
          <span className="custom-radio-btn"></span>
          Адреса
        </label>
        <label className="custom-radio">
          <input type="radio" name="dispatchLocation" value="поштомат" />
          <span className="custom-radio-btn"></span>
          Поштомат
        </label>
      </div>

      <h2 className="h">Місце одерження</h2>
      <div className="shipping-options">
        <label className="custom-radio">
          <input type="radio" name="receivingLocation" value="відділення" />
          <span className="custom-radio-btn"></span>
          Відділення
        </label>
        <label className="custom-radio">
          <input type="radio" name="receivingLocation" value="адреса" />
          <span className="custom-radio-btn"></span>
          Адреса
        </label>
        <label className="custom-radio">
          <input type="radio" name="receivingLocation" value="поштомат" />
          <span className="custom-radio-btn"></span>
          Поштомат
        </label>
      </div>

      <h1>Дані відправника</h1>
      <h2 className="h">Номер телефону</h2>
      <input placeholder="380 XXXXXXXXX" className="estimatedValue" />
      <h2 className="h">Прізвище</h2>
      <input placeholder="Введіть прізвище" className="estimatedValue" />
      <h2 className="h">Iм'я</h2>
      <input placeholder="Введіть ім'я" className="estimatedValue" />

      <h1>Дані одержувача</h1>
      <h2 className="h">Номер телефону</h2>
      <input placeholder="380 XXXXXXXXX" className="estimatedValue" />
      <h2 className="h">Прізвище</h2>
      <input placeholder="Введіть прізвище" className="estimatedValue" />
      <h2 className="h">Iм'я</h2>
      <input placeholder="Введіть ім'я" className="estimatedValue" />

      <h2 className="h">Оплата послуг доставки</h2>
      <div className="shipping-options">
        <label className="custom-radio">
          <input type="radio" name="paymentForDelivery" value="відправник" />
          <span className="custom-radio-btn"></span>
          Відправник
        </label>
        <label className="custom-radio">
          <input type="radio" name="paymentForDelivery" value="одержувач" />
          <span className="custom-radio-btn"></span>
          Одержувач
        </label>
      </div>

      <div className="placeDispatch">
        <button className="buttonCreateShipmen">Підтвердити дані</button>
      </div>
    </>
  );
};

export default DocumentShipment;
