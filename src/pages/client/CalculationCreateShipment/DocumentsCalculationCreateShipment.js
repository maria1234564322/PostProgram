import React from 'react';

const DocumentsCalculationCreateShipment = () => {
  return (
    <>
      <div className="switch-container">
        <h2 className="h">Пакування</h2>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="switch-container">
        <h2 className="h">Зворотна доставка </h2>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <div>
        <h2 className="placeDispatch">Місце відправки</h2>
        <div className="shipping-options">
          <label className="custom-radio">
            <input type="radio" name="shippingLocation" value="відділення" />
            <span className="custom-radio-btn"></span>
            Відділення
          </label>
          <label className="custom-radio">
            <input type="radio" name="shippingLocation" value="адреса" />
            <span className="custom-radio-btn"></span>
            Адреса
          </label>
          <label className="custom-radio">
            <input type="radio" name="shippingLocation" value="поштомат" />
            <span className="custom-radio-btn"></span>
            Поштомат
          </label>
        </div>
      </div>
      <div>
        <h2 className="placeDispatch">Місце одерження</h2>
        <div className="shipping-options">
          <label className="custom-radio">
            <input type="radio" name="shippingLocation" value="відділення" />
            <span className="custom-radio-btn"></span>
            Відділення
          </label>
          <label className="custom-radio">
            <input type="radio" name="shippingLocation" value="адреса" />
            <span className="custom-radio-btn"></span>
            Адреса
          </label>
          <label className="custom-radio">
            <input type="radio" name="shippingLocation" value="поштомат" />
            <span className="custom-radio-btn"></span>
            Поштомат
          </label>
        </div>
      </div>
      <div>
        <h1>Дані відправника</h1>
        <h2 className="h"> Номер телефону</h2>
        <input placeholder="380 XXXXXXXXX" className="estimatedValue" />
        <h2 className="h">Прізвище</h2>
        <input placeholder="Введіть прізвище" className="estimatedValue" />
        <h2 className="h">Iм'я</h2>
        <input placeholder="Введіть ім'я" className="estimatedValue" />
      </div>
      <div>
        <h1>Дані одержувача</h1>
        <h2 className="h"> Номер телефону</h2>
        <input placeholder="380 XXXXXXXXX" className="estimatedValue" />
        <h2 className="h">Прізвище</h2>
        <input placeholder="Введіть прізвище" className="estimatedValue" />
        <h2 className="h">Iм'я</h2>
        <input placeholder="Введіть ім'я" className="estimatedValue" />
      </div>
      <div>
        <h2 className="h">Оплата послуг доставки</h2>
        <div className="shipping-options">
          <label className="custom-radio">
            <input type="radio" name="paymentOption" value="відправник" />
            <span className="custom-radio-btn"></span>
            Відправник
          </label>
          <label className="custom-radio">
            <input type="radio" name="paymentOption" value="одержувач" />
            <span className="custom-radio-btn"></span>
            Одержувач
          </label>
        </div>
      </div>
    </>
  );
};

export default DocumentsCalculationCreateShipment;
