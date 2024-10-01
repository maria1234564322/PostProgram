import React from 'react';
import { useNavigate } from 'react-router-dom'; // Додано для навігації
import './Home.css';
import boxImage from '../../../images/box.jpg';
import carc from '../../../images/carcul.jpg';
import car from '../../../images/car.jpg';
import dog from '../../../images/dog.png';
import promotions from '../../../images/promotions.png';
import socmer from '../../../images/socmer.jpg';
import preview from '../../../images/preview.png';
import about from '../../../images/about.png';

const Home = () => {
  const navigate = useNavigate(); // Хук для навігації

  return (
    <div className="container">
      <nav>
        <li className="blokUpper">
          <a className="servicesUpper">ВІДСТЕЖИТИ ВІДПРАВЛЕННЯ</a>

          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="Відстежити замовлення"
            ></input>
            <button className="button-search">
              <span>➔</span>
            </button>
          </div>
        </li>

        {/* Перехід на сторінку створення відправлення */}
        <li className="blokUpper" onClick={() => navigate('/CreateShipment')}>
          <a className="servicesUpper">СТВОРИТИ ВІДПРАВЛЕННЯ</a>
          <img src={boxImage} className="boxImg" />
        </li>

        <li
          className="blokUpper"
          onClick={() => navigate('/CalculationCreateShipment')}
        >
          <a className="servicesUpper">РОЗРАХУВАТИ ВАРТІСТЬ</a>
          <img src={carc} className="boxImg" />
        </li>
      </nav>

      <main>
        <p className="text-postalServices">Поштові послуги</p>
        <section className="services-block">
          <div className="service">
            <a className="postalServicesBloc">
              <img src={car} className="carImg" />
              <h2 className="text-postalServices"> Доставка по Україні</h2>
              <p className="text-postalServiceslitle">
                Замовляйте доставку у найвіддаленіші куточки України,
                відправляйте й отримуйте посилки з усього світу і навпаки.
              </p>
              <button
                className="learnMoreButton"
                onClick={() => navigate('/DeliveryAcrossUkraine')}
              >
                {' '}
                Дізнатися більше
              </button>
            </a>
          </div>
          <div className="service">
            <a className="postalServicesBloc">
              <img src={dog} className="carImg" />
              <h2 className="text-postalServices"> Перевезення тварин</h2>
              <p className="text-postalServiceslitle">
                Перевезеня та допомога з документами. Забираємо та доставляємо
                адресою.
              </p>
              <button
                className="learnMoreButton"
                onClick={() => navigate('/TransportationAnimals ')}
              >
                Дізнатися більше
              </button>
            </a>
          </div>

          <div className="service">
            <a className="postalServicesBloc">
              <img src={promotions} className="carImg" />
              <h2 className="text-postalServices"> Акції та пророзиції</h2>
              <p className="text-postalServiceslitle">
                Переглядайте всі наші акції та пропозиції щодо доставки та
                перевезення тварин!
              </p>
              <button
                className="learnMoreButton"
                onClick={() => navigate('/Actions')}
              >
                {' '}
                Дізнатися більше
              </button>
            </a>
          </div>
        </section>

        <section className="search-block">
          <h1 className="text-postalServices">Бажаєте зв'язатися з нами?</h1>
          <div className="buttons-communication">
            <button className="button-communication">Телефонуйте</button>
            <button className="button-communication">Напишіть нам</button>
            <button className="button-communication">
              Завітайте у відділення
            </button>
          </div>
        </section>

        <section className="proofs-block">
          <h2 className="find-the-index">Знайти індекс</h2>
          <p className="text-index">
            Поштовий індекс — це код із 5 цифр, який допомагає пришвидшити
            сортування та доставку відправлень. Поштовий індекс мають всі
            відділення пошти та всі населені пункти України.
          </p>
          <div>
            <input
              type="text"
              className="searchIndex"
              placeholder="Введіть назву населеного пункту"
            ></input>
            <button className="button-index">Знайти</button>
          </div>
        </section>
      </main>

      <footer>
        <div className="conteinerAbout">
          <div className="blokabout">
            <p className="servicesUpper">Політика конфіденційності</p>
            <img src={preview} className="previewImg" />
          </div>
          <div className="blokabout">
            <p className="servicesUpper">Ми в соціальних мережах</p>
            <img src={socmer} className="socImg" />
          </div>
          <div className="blokabout">
            <p className="servicesUpper">Про нас</p>
            <img src={about} className="previewImg" />
          </div>
        </div>
        <div className="postAnim">
          <p>&nbsp;&nbsp;&copy; 2024 PostAnim</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
