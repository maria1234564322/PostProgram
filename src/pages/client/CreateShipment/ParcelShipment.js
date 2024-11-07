import React from 'react';
import './CreateShipment.css';

const ParcelShipment = () => {
  return (
    <>
      <h2 className="h-createShipment">Оціночна вартість </h2>
      <input placeholder="Грн" className="estimatedValue-createShipment" />
      <h2 className="h-createShipment">Промокод </h2>
      <div>
        <input
          placeholder="Введіть промокод"
          className="estimatedValue-createShipment"
        />
      </div>

      <h2 className="h-createShipment"> Опис </h2>
      <input
        placeholder="Введіть назву чи опис товару"
        className="estimatedValue-createShipment"
      />

      <h2 className="h-createShipment">Вага посилки </h2>
      <input placeholder="кг" className="estimatedValue-createShipment" />
      <h2 className="h-createShipment">Габарити </h2>

      <div className="dimensions-createShipment">
        <input placeholder="Висота" className="estimatedValue-createShipment" />
        <input
          placeholder="Довжина"
          className="estimatedValue-createShipment"
        />
        <input placeholder="Ширина" className="estimatedValue-createShipment" />
      </div>

      <div className="placeDispatch-createShipment">
        <h2 className="h-createShipment">
          Грошовий переказ при отриманні посилки
        </h2>
        <input placeholder="грн" className="estimatedValue-createShipment" />
      </div>

      <h2 className="h-createShipment">Місце відправки</h2>

      <div className="shippingOptions-createShipment">
        <label className="customRadio-createShipment">
          <input type="radio" name="dispatchLocation" value="відділення" />
          <span className="customRadioBtn-createShipment"></span>
          Відділення
        </label>
        <label className="customRadio-createShipment">
          <input type="radio" name="dispatchLocation" value="адреса" />
          <span className="customRadioBtn-createShipment"></span>
          Адреса
        </label>
        <label className="customRadio-createShipment">
          <input type="radio" name="dispatchLocation" value="поштомат" />
          <span className="customRadioBtn-createShipment"></span>
          Поштомат
        </label>
      </div>

      <h2 className="h-createShipment">Місце одерження</h2>
      <div className="shippingOptions-createShipment">
        <label className="customRadio-createShipment">
          <input type="radio" name="receivingLocation" value="відділення" />
          <span className="customRadioBtn-createShipment"></span>
          Відділення
        </label>
        <label className="customRadio-createShipment">
          <input type="radio" name="receivingLocation" value="адреса" />
          <span className="customRadioBtn-createShipment"></span>
          Адреса
        </label>
        <label className="customRadio-createShipment">
          <input
            type="radio"
            name="receivingLocation-createShipment"
            value="поштомат"
          />
          <span className="customRadioBtn-createShipment"></span>
          Поштомат
        </label>

        <button className="buttonConfirm-createShipmen">
          Підтвердити дані
        </button>
      </div>
    </>
  );
};

export default ParcelShipment;
