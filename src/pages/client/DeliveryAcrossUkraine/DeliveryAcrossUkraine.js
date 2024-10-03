import { useState } from 'react';
import './DeliveryAcrossUkraine.css';
import bgapplecation from '../../../images/bgapplecation.svg';
import department from '../../../images/department.jpg';
import house from '../../../images/house.jpg';
const DeliveryAcrossUkraine = () => {
  return (
    <>
      <div className="background">
        <div className="mainContainer-deliveryDepartment">
          <div class="container-deliveryDepartment">
            <div class="block-deliveryDepartment">
              <p className="bigText-deliveryDepartment ">
                Доставка в відділення
              </p>
              <img src={department} className="img-deliveryDepartment " />
              <p className="text-deliveryDepartment">
                ● Вартість доставки від 50 грн{' '}
              </p>
              <p className="text-deliveryDepartment">
                ● Можливість забрати посилку в будь-який зручний час у робочі
                години відділення
              </p>
              <p className="text-deliveryDepartment">
                ● Тривалість доставки від 1 до 3 днів
              </p>
            </div>
            <div class="block-deliveryDepartment">
              <p className="bigText-deliveryDepartment">Кур'єрська доставка </p>
              <img src={bgapplecation} className="img-deliveryDepartment " />
              <p className="text-deliveryDepartment">
                ● Кур'єр доставить посилку у вказаний час і місце
              </p>
              <p className="text-deliveryDepartment">
                ● Кур'єр забере посилку безпосередньо у відправника
              </p>
              <p className="text-deliveryDepartment">
                ● Тривалість доставки від 2 до 6 днів
              </p>
            </div>

            <div className="block-deliveryDepartment">
              <p className="bigText-deliveryDepartment ">Доставка в поштомат</p>
              <img src={house} className="img-deliveryDepartment " />
              <p className="text-deliveryDepartment">
                ● Можливість забрати посилку в будь-який час
              </p>
              <p className="text-deliveryDepartment">
                ● Безконтактне отримання посилок
              </p>
              <p className="text-deliveryDepartment">
                ● Тривалість доставки від 2 до 3 днів
              </p>
            </div>
          </div>
          <p className="bigText-deliveryDepartment">Додаткові послуги</p>
          <div class="container-deliveryDepartment">
            <div class="block-deliveryDepartment">
              <p className="text-deliveryDepartment">
                ● Можливість оплатити рахунки за електроенергію, газ, воду та
                інші послуги без черг.
              </p>

              <p className="text-deliveryDepartment">
                {' '}
                ● Можливість відправити або отримати грошові перекази
              </p>
            </div>
            <div class="block-deliveryDepartment">
              <p className="text-deliveryDepartment">
                ● Вам допоможуть правильно упакувати ваше відправлення.
              </p>
              <p className="text-deliveryDepartment">
                ● Можливість зробити копії або роздрукувати необхідні документи.
              </p>
              <p className="text-deliveryDepartment">
                {' '}
                ● SMS або Viber-повідомлення про доставку;
              </p>
            </div>
            <div class="block-deliveryDepartment">
              <p className="text-deliveryDepartment">
                {' '}
                ● Можливість оплатити товар при отриманні посилки;
              </p>
              <p className="text-deliveryDepartment">
                {' '}
                ● Можливість оплатити штрафи ДАІ, адміністративні штрафи та інші
                платежі.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryAcrossUkraine;
