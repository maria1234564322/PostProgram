import React from 'react';

const ParcelCalculationCreateShipment = () => {
  return (
    <>
      <div>
        <h2 className="h-calculationCreateShipmen">Оціночна вартість </h2>
        <input
          placeholder="Грн"
          className="estimatedValue-calculationCreateShipmen"
        />
        <h2 className="h-calculationCreateShipmen">Промокод </h2>
        <div>
          <input
            placeholder="Введіть промокод"
            className="estimatedValue-calculationCreateShipmen"
          />
        </div>
        <h2 className="h-calculationCreateShipmen"> Опис </h2>
        <input
          placeholder="Введіть назву чи опис товару"
          className="estimatedValueМах-calculationCreateShipmen"
        />
        <h2 className="h-calculationCreateShipmen">Вага посилки </h2>
        <input
          placeholder="кг"
          className="estimatedValue-calculationCreateShipmen"
        />
        <h2 className="h-calculationCreateShipmen">Габарити </h2>

        <div className="dimensions-calculationCreateShipmen">
          <input
            placeholder="Висота"
            className="estimatedValue2-calculationCreateShipmen"
          />
          <input
            placeholder="Довжина"
            className="estimatedValue2-calculationCreateShipmen"
          />
          <input
            placeholder="Ширина"
            className="estimatedValue2-calculationCreateShipmen"
          />
        </div>
      </div>

      <h2 className="h-calculationCreateShipmen">Місце відправки</h2>

      <div className="shippingOptions-calculationCreateShipmen">
        <label className="customRadio-calculationCreateShipmen">
          <input type="radio" name="dispatchLocation" value="відділення" />
          <span className="customRadioBtn-calculationCreateShipmen"></span>
          Відділення
        </label>
        <label className="customRadio-calculationCreateShipmen">
          <input type="radio" name="dispatchLocation" value="адреса" />
          <span className="customRadioBtn-calculationCreateShipmen"></span>
          Адреса
        </label>
        <label className="customRadio-calculationCreateShipmen">
          <input type="radio" name="dispatchLocation" value="поштомат" />
          <span className="customRadioBtn-calculationCreateShipmen"></span>
          Поштомат
        </label>
      </div>

      <h2 className="h-calculationCreateShipmen">Місце одерження</h2>

      <div className="shippingOptions-calculationCreateShipmen">
        <label className="customRadio-calculationCreateShipmen">
          <input type="radio" name="receivingLocation" value="відділення" />
          <span className="customRadioBtn-calculationCreateShipmen"></span>
          Відділення
        </label>
        <label className="customRadio-calculationCreateShipmen">
          <input type="radio" name="receivingLocation" value="адреса" />
          <span className="customRadioBtn-calculationCreateShipmen"></span>
          Адреса
        </label>
        <label className="customRadio-calculationCreateShipmen">
          <input type="radio" name="receivingLocation" value="поштомат" />
          <span className="customRadioBtn-calculationCreateShipmen"></span>
          Поштомат
        </label>
      </div>

      <div className="placeDispatch-calculationCreateShipmen">
        <h2 className="h-calculationCreateShipmen">
          Грошовий переказ при отриманні посилки
        </h2>
        <input
          placeholder="грн"
          className="estimatedValue-calculationCreateShipmen"
        />
      </div>
      <button className="buttonConfirm-createShipmen">Підтвердити дані</button>
    </>
  );
};

export default ParcelCalculationCreateShipment;
