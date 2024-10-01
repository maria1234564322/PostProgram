import { useState } from 'react';
import './DeliveryAcrossUkraine.css';
import bgapplecation from '../../../images/bgapplecation.svg';
import department from '../../../images/department.jpg';
import house from '../../../images/house.jpg';
const DeliveryAcrossUkraine = () => {
  return (
    <div>
      <div className="background">
        <div className="containerDelivery">
          <div class="containerDeliveryDepartment">
            <div class="blockDeliveryDepartment">
              <p className="text-postalServices ">Доставка в відділення</p>
              <img src={department} className="department" />
              <p className="text-postalServiceslitle">
                ● Вартість доставки від 50 грн{' '}
              </p>
              <p className="text-postalServiceslitle">
                ● Можливість забрати посилку в будь-який зручний час у робочі
                години відділення
              </p>
              <p className="text-postalServiceslitle">
                ● Тривалість доставки від 1 до 3 днів
              </p>
            </div>
            <div class="blockDeliveryDepartment">
              <p className="text-postalServices">Кур'єрська доставка </p>
              <img src={bgapplecation} className="department" />
              <p className="text-postalServiceslitle">
                ● Кур'єр доставить посилку у вказаний час і місце
              </p>
              <p className="text-postalServiceslitle">
                ● Кур'єр забере посилку безпосередньо у відправника
              </p>
              <p className="text-postalServiceslitle">
                ● Тривалість доставки від 2 до 6 днів
              </p>
            </div>

            <div className="blockDeliveryDepartment">
              <p className="text-postalServices ">Доставка в поштомат</p>
              <img src={house} className="department" />
              <p className="text-postalServiceslitle">
                ● Можливість забрати посилку в будь-який час
              </p>
              <p className="text-postalServiceslitle">
                ● Безконтактне отримання посилок
              </p>
              <p className="text-postalServiceslitle">
                ● Тривалість доставки від 2 до 3 днів
              </p>
            </div>
          </div>
          <p className="text-postalServices">Додаткові послуги</p>
          <div class="containerDeliveryDepartment">
            <div class="blockDeliveryDepartment">
              <p className="text-postalServiceslitle">
                ● Можливість оплатити рахунки за електроенергію, газ, воду та
                інші послуги без черг.
              </p>

              <p className="text-postalServiceslitle">
                {' '}
                ● Можливість відправити або отримати грошові перекази
              </p>
            </div>
            <div class="blockDeliveryDepartment">
              <p className="text-postalServiceslitle">
                ● Вам допоможуть правильно упакувати ваше відправлення.
              </p>
              <p className="text-postalServiceslitle">
                ● Можливість зробити копії або роздрукувати необхідні документи.
              </p>
              <p className="text-postalServiceslitle">
                {' '}
                ● SMS або Viber-повідомлення про доставку;
              </p>
            </div>
            <div class="blockDeliveryDepartment">
              <p className="text-postalServiceslitle">
                {' '}
                ● Можливість оплатити товар при отриманні посилки;
              </p>
              <p className="text-postalServiceslitle">
                {' '}
                ● Можливість оплатити штрафи ДАІ, адміністративні штрафи та інші
                платежі.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAcrossUkraine;
