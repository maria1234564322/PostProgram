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
    <>
      <nav>
        <li className="blokUpper-home">
          <a className="servicesUpper-home">ВІДСТЕЖИТИ ВІДПРАВЛЕННЯ</a>
          <input
            type="text"
            className="searchTerm-home"
            placeholder="Відстежити замовлення"
          ></input>
          <button className="buttonSearch-home">
            <span>➔</span>
          </button>
        </li>

        {/* Перехід на сторінку створення відправлення */}
        <li
          className="blokUpper-home"
          onClick={() => navigate('/CreateShipment')}
        >
          <a className="servicesUpper-home">СТВОРИТИ ВІДПРАВЛЕННЯ</a>
          <img src={boxImage} className="img-home" />
        </li>

        <li
          className="blokUpper-home"
          onClick={() => navigate('/CalculationCreateShipment')}
        >
          <a className="servicesUpper-home">РОЗРАХУВАТИ ВАРТІСТЬ</a>
          <img src={carc} className="img-home" />
        </li>
      </nav>

      <main>
        <p className="textPostal-home">Поштові послуги</p>
        <section className="servicesBlock-home">
          <div className="service-home">
            <a className="postalBloc-home">
              <img src={car} className="carImg-home" />
              <h2 className="textPostal-home"> Доставка по Україні</h2>
              <p className="textPostalLitle-home ">
                Замовляйте доставку у найвіддаленіші куточки України,
                відправляйте й отримуйте посилки з усього світу і навпаки.
              </p>
              <button
                className="learnMoreButton-home"
                onClick={() => navigate('/DeliveryAcrossUkraine')}
              >
                {' '}
                Дізнатися більше
              </button>
            </a>
          </div>
          <div className="service-home">
            <a className="postalBloc-home">
              <img src={dog} className="carImg-home" />
              <h2 className="textPostal-home"> Перевезення тварин</h2>
              <p className="textPostalLitle-home ">
                Перевезеня та допомога з документами. Забираємо та доставляємо
                адресою.
              </p>
              <button
                className="learnMoreButton-home"
                onClick={() => navigate('/TransportationAnimals ')}
              >
                Дізнатися більше
              </button>
            </a>
          </div>

          <div className="service-home">
            <a className="postalBloc-home">
              <img src={promotions} className="carImg-home" />
              <h2 className="textPostal-home"> Акції та пророзиції</h2>
              <p className="textPostalLitle-home ">
                Переглядайте всі наші акції та пропозиції щодо доставки та
                перевезення тварин!
              </p>
              <button
                className="learnMoreButton-home"
                onClick={() => navigate('/Actions')}
              >
                {' '}
                Дізнатися більше
              </button>
            </a>
          </div>
        </section>

        <section className="searchBlocking-home">
          <h1 className="textPostal-home">Бажаєте зв'язатися з нами?</h1>
          <div>
            <button className="buttonCommunication-home">Телефонуйте</button>
            <button className="buttonCommunication-home">Напишіть нам</button>
            <button className="buttonCommunication-home">
              Завітайте у відділення
            </button>
          </div>
        </section>

        <section className="proofs-home">
          <h2 className="findIndex-home">Знайти індекс</h2>
          <p>
            Поштовий індекс — це код із 5 цифр, який допомагає пришвидшити
            сортування та доставку відправлень. Поштовий індекс мають всі
            відділення пошти та всі населені пункти України.
          </p>
          <div>
            <input
              type="text"
              className="searchIndex-home"
              placeholder="Введіть назву населеного пункту"
            ></input>
            <button className="buttonIndex-home">Знайти</button>
          </div>
        </section>
      </main>

      <footer>
        <div className="conteinerAbout-home">
          <div className="blokabout-home">
            <p className="servicesUpper-home">Політика конфіденційності</p>
            <img src={preview} className="previewImg-home" />
          </div>
          <div className="blokabout-home">
            <p className="servicesUpper-home">Ми в соціальних мережах</p>
            <img src={socmer} className="socImg-home" />
          </div>
          <div className="blokabout-home">
            <p className="servicesUpper-home">Про нас</p>
            <img src={about} className="previewImg-home" />
          </div>
        </div>
        <div className="postAnim-home">
          <p>&nbsp;&nbsp;&copy; 2024 PostAnim</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
