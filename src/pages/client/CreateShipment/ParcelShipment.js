import React from 'react';

const ParcelShipment = () => {
  return (
    <>
      <h2 className="h-calculationCreateShipment">Оціночна вартість </h2>
      <input placeholder="Грн" className="estimatedValue" />
      <h2 className="h-calculationCreateShipment">Промокод </h2>
      <div>
        <input
          placeholder="Введіть промокод"
          className="estimatedValue-calculationCreateShipment"
        />
      </div>
      <h2 className="h-calculationCreateShipment"> Опис </h2>
      <input
        placeholder="Введіть назву чи опис товару"
        className="estimatedValueМах-calculationCreateShipment"
      />
      <h2 className="h-calculationCreateShipment">Вага посилки </h2>
      <input
        placeholder="кг"
        className="estimatedValue-calculationCreateShipment"
      />
      <h2 className="h-calculationCreateShipment">Габарити </h2>
      <div className="dimensions-calculationCreateShipment">
        <input
          placeholder="Висота"
          className="estimatedValue2-calculationCreateShipment"
        />
        <input
          placeholder="Довжина"
          className="estimatedValue2-calculationCreateShipment"
        />
        <input
          placeholder="Ширина"
          className="estimatedValue2-calculationCreateShipment"
        />
      </div>
      <div className="placeDispatch-calculationCreateShipment">
        <h2 className="h-calculationCreateShipment">
          Грошовий переказ при отриманні посилки
        </h2>
        <input
          placeholder="грн"
          className="estimatedValue-calculationCreateShipment"
        />
      </div>
      <h2 className="h-calculationCreateShipment">Місце відправки</h2>
      <div className="shippingOptions-calculationCreateShipment">
        <label className="customRadio-calculationCreateShipment">
          <input type="radio" name="dispatchLocation" value="відділення" />
          <span className="customRadioBtn-calculationCreateShipment"></span>
          Відділення
        </label>
        <label className="customRadio-calculationCreateShipment">
          <input type="radio" name="dispatchLocation" value="адреса" />
          <span className="customRadioBtn-calculationCreateShipment"></span>
          Адреса
        </label>
        <label className="customRadio-calculationCreateShipment">
          <input type="radio" name="dispatchLocation" value="поштомат" />
          <span className="customRadioBtn"></span>
          Поштомат
        </label>
      </div>

      <h2 className="h-calculationCreateShipment">Місце одерження</h2>
      <div className="shippingOptions-calculationCreateShipment">
        <label className="customRadio-calculationCreateShipment">
          <input type="radio" name="receivingLocation" value="відділення" />
          <span className="customRadioBtn-calculationCreateShipment"></span>
          Відділення
        </label>
        <label className="customRadio-calculationCreateShipment">
          <input type="radio" name="receivingLocation" value="адреса" />
          <span className="customRadioBtn-calculationCreateShipment"></span>
          Адреса
        </label>
        <label className="customRadio-calculationCreateShipment">
          <input
            type="radio"
            name="receivingLocation-calculationCreateShipment"
            value="поштомат"
          />
          <span className="customRadioBtn-calculationCreateShipment"></span>
          Поштомат
        </label>
      </div>
      <div className="placeDispatch-calculationCreateShipment">
        <button className="buttonCreateShipmen-calculationCreateShipment">
          Підтвердити дані
        </button>
      </div>
    </>
  );
};

export default ParcelShipment;
