import React from 'react';

const DocumentsCalculationCreateShipment = () => {
  return (
    <>
      <div className="switchContainer-calculationCreateShipmen">
        <h2 className="h-calculationCreateShipmen">Пакування</h2>
        <label className="switch-calculationCreateShipment">
          <input type="checkbox" />
          <span className="slider-calculationCreateShipment"></span>
        </label>
        <label className="switch-calculationCreateShipmen">
          <input type="checkbox" />
        </label>
      </div>
      <div className="switchContainer-calculationCreateShipmen">
        <h2 className="h-calculationCreateShipmen">Зворотна доставка </h2>
        <label className="switch-calculationCreateShipment">
          <input type="checkbox" />
          <span className="slider-calculationCreateShipment"></span>
        </label>
        <label className="switch-calculationCreateShipmen">
          <input type="checkbox" />
        </label>
      </div>
      <div>
        <h2 className="placeDispatch-calculationCreateShipmen">
          Місце відправки
        </h2>
        <div className="shippingOptions-calculationCreateShipmen">
          <label className="customRadio-calculationCreateShipmen">
            <input type="radio" name="shippingLocation" value="відділення" />
            <span className="customRadioBtn-calculationCreateShipmen"></span>
            Відділення
          </label>
          <label className="customRadio-calculationCreateShipmen">
            <input type="radio" name="shippingLocation" value="адреса" />
            <span className="customRadioBtn-calculationCreateShipmen"></span>
            Адреса
          </label>
          <label className="customRadio-calculationCreateShipmen">
            <input type="radio" name="shippingLocation" value="поштомат" />
            <span className="customRadioBtn-calculationCreateShipmen"></span>
            Поштомат
          </label>
        </div>
      </div>
      <div>
        <h2 className="placeDispatch-calculationCreateShipmen">
          Місце одерження
        </h2>
        <div className="shippingOptions-calculationCreateShipmen">
          <label className="customRadio-calculationCreateShipmen">
            <input type="radio" name="shippingLocation" value="відділення" />
            <span className="customRadioBtn-calculationCreateShipmen"></span>
            Відділення
          </label>
          <label className="customRadio-calculationCreateShipmen">
            <input type="radio" name="shippingLocation" value="адреса" />
            <span className="customRadioBtn-calculationCreateShipmen"></span>
            Адреса
          </label>
          <label className="customRadio-calculationCreateShipmen">
            <input type="radio" name="shippingLocation" value="поштомат" />
            <span className="customRadioBtn-calculationCreateShipmen"></span>
            Поштомат
          </label>
        </div>
      </div>
      <div>
        <h2 className="h-calculationCreateShipmen">Оплата послуг доставки</h2>
        <div className="shippingOptions-calculationCreateShipmen">
          <label className="customRadio-calculationCreateShipmen">
            <input type="radio" name="paymentOption" value="відправник" />
            <span className="customRadioBtn-calculationCreateShipmen"></span>
            Відправник
          </label>
          <label className="customRadio-calculationCreateShipmen">
            <input type="radio" name="paymentOption" value="одержувач" />
            <span className="customRadioBtn-calculationCreateShipmen"></span>
            Одержувач
          </label>
        </div>
      </div>
      <div>
        <h1 className="h1-calculationCreateShipmen">Дані відправника</h1>
        <h2 className="h-calculationCreateShipmen"> Номер телефону</h2>
        <input
          placeholder="380 XXXXXXXXX"
          className="estimatedValue-calculationCreateShipmen"
        />
        <h2 className="h-calculationCreateShipmen">Прізвище</h2>
        <input
          placeholder="Введіть прізвище"
          className="estimatedValue-calculationCreateShipmen"
        />
        <h2 className="h-calculationCreateShipmen">Iм'я</h2>
        <input
          placeholder="Введіть ім'я"
          className="estimatedValue-calculationCreateShipmen"
        />
      </div>
      <div>
        <h1 className="h1-calculationCreateShipmen">Дані одержувача</h1>
        <h2 className="h-calculationCreateShipmen"> Номер телефону</h2>
        <input
          placeholder="380 XXXXXXXXX"
          className="estimatedValue-calculationCreateShipmen"
        />
        <h2 className="h-calculationCreateShipmen">Прізвище</h2>
        <input
          placeholder="Введіть прізвище"
          className="estimatedValue-calculationCreateShipmen"
        />
        <h2 className="h-calculationCreateShipmen">Iм'я</h2>
        <input
          placeholder="Введіть ім'я"
          className="estimatedValue-calculationCreateShipmen"
        />
      </div>

      <button className="buttonConfirm-createShipmen">Підтвердити дані</button>
    </>
  );
};

export default DocumentsCalculationCreateShipment;
