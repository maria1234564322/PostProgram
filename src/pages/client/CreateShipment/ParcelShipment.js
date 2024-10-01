import React from 'react';

const ParcelShipment = () => {
  return (
    <>
      <h2 className="h">Оціночна вартість </h2>
      <input placeholder="Грн" className="estimatedValue" />
      <h2 className="h">Промокод </h2>
      <div>
        <input placeholder="Введіть промокод" className="estimatedValue" />
      </div>
      <h2 className="h"> Опис </h2>
      <input
        placeholder="Введіть назву чи опис товару"
        className="estimatedValueМах"
      />
      <h2 className="h">Вага посилки </h2>
      <input placeholder="кг" className="estimatedValue" />
      <h2 className="h">Габарити </h2>
      <div className="dimensions">
        <input placeholder="Висота" className="estimatedValue2" />
        <input placeholder="Довжина" className="estimatedValue2" />
        <input placeholder="Ширина" className="estimatedValue2" />
      </div>
      <div className="placeDispatch">
        <h2 className="h">Грошовий переказ при отриманні посилки</h2>
        <input placeholder="грн" className="estimatedValue" />
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
      <div className="placeDispatch">
        <button className="buttonCreateShipmen">Підтвердити дані</button>
      </div>
    </>
  );
};

export default ParcelShipment;
