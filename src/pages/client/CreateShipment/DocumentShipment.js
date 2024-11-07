import React from 'react';

const DocumentShipment = () => {
  return (
    <>
      <h2 className="h-createShipment">Тип документа</h2>
      <input
        placeholder="Назва документа"
        className="estimatedValue-createShipment"
      />

      <div className="switchContainer-createShipment">
        <h2 className="h-createShipment">Пакування</h2>
        <div className="switchConteiner-createShipment">
          <label className="switch-createShipment">
            <input type="checkbox" />
            <span className="slider-createShipment"></span>
          </label>
        </div>
      </div>

      <div className="switchContainer-createShipment">
        <h2 className="h-createShipment">Зворотна доставка</h2>
        <div className="switchConteiner-createShipment">
          <label className="switch-createShipment">
            <input type="checkbox" />
            <span className="slider-createShipment"></span>
          </label>
        </div>
      </div>
      <h2 className="h-createShipment">Послуга упаковки товару</h2>
      <div className="shippingOptions-createShipment">
        <label className="customRadio-createShipment">
          <input type="radio" name="packingService" value="yes" />
          <span className="customRadioBtn-createShipment"></span>
          Так
        </label>
        <label className="customRadio-createShipment">
          <input type="radio" name="packingService" value="no" />
          <span className="customRadioBtn-createShipment"></span>
          Ні
        </label>
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
          <input type="radio" name="receivingLocation" value="поштомат" />
          <span className="customRadioBtn-createShipment"></span>
          Поштомат
        </label>
      </div>

      <h1 className="h1-createShipment">Дані відправника</h1>
      <h2 className="h-createShipment">Номер телефону</h2>
      <input
        placeholder="380 XXXXXXXXX"
        className="estimatedValue-createShipment"
      />
      <h2 className="h-createShipment">Прізвище</h2>
      <input
        placeholder="Введіть прізвище"
        className="estimatedValue-createShipment"
      />
      <h2 className="h-createShipment">Iм'я</h2>
      <input
        placeholder="Введіть ім'я"
        className="estimatedValue-createShipment"
      />

      <h1 className="h1-createShipment">Дані одержувача</h1>
      <h2 className="h-createShipment">Номер телефону</h2>
      <input
        placeholder="380 XXXXXXXXX"
        className="estimatedValue-createShipment"
      />
      <h2 className="h-createShipment">Прізвище</h2>
      <input
        placeholder="Введіть прізвище"
        className="estimatedValue-createShipment"
      />
      <h2 className="h-createShipment">Iм'я</h2>
      <input
        placeholder="Введіть ім'я"
        className="estimatedValue-createShipment"
      />

      <h2 className="h-createShipment">Оплата послуг доставки</h2>
      <div className="shippingOptions-createShipment">
        <label className="customRadio-createShipment">
          <input type="radio" name="paymentForDelivery" value="відправник" />
          <span className="customRadioBtn-createShipment"></span>
          Відправник
        </label>
        <label className="customRadio-createShipment">
          <input type="radio" name="paymentForDelivery" value="одержувач" />
          <span className="customRadioBtn-createShipment"></span>
          Одержувач
        </label>
      </div>
      <button className="buttonConfirm-createShipmen">Підтвердити дані</button>
    </>
  );
};

export default DocumentShipment;
