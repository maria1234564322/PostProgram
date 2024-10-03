import { useState } from 'react';
import './TransportationAnimals.css';
import consultant from '../../../images/consultant.png';
import telegram from '../../../images/telegram.png';
import viber from '../../../images/viber.png';
const TransportationAnimals = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Як доставити тварину в інше місто України?',
      answer:
        'Для відправки тварини в інше місто України необхідно звернутися в спеціалізовану компанію, що надає послуги з перевезення тварин.',
    },
    {
      question: 'Від чого залежить вартість перевезення тварин?',
      answer:
        'Вартість залежить від виду тварини, дистанції перевезення, ваги та умов транспортування.',
    },
    {
      question: 'Як забезпечити комфорт перевезення собаки в машині?',
      answer:
        'Для комфортного перевезення собаки використовуйте спеціальні ремені безпеки або перенески.',
    },
    {
      question: 'Чи потрібні документи для транспортування котів і собак?',
      answer:
        'Так, для перевезення тварин потрібні ветеринарні документи, зокрема паспорт та довідка про щеплення.',
    },
  ];

  return (
    <div>
      <div className="container-transportationAnimals">
        <div className="backgronud-transportationAnimals">
          <h1>Особливості транспортування тварин</h1>
          <h4>
            Доставка тварин по Україні (місто або міжмісто) буде здійснена
            згідно з усіма нормами і правилами. Це гарантує, що ваш вихованець
            буде в безпеці та отримає необхідний догляд під час перевезення.
          </h4>
          <h3>
            Вибираючи послуги перевезення тварин по Україні, необхідно бути
            впевненим у кількох ключових моментах:
          </h3>
          <ul>
            <li>
              <span className="listNumber-transportationAnimals">1</span>{' '}
              Безпека: наша компанія надає надійні умови для перевезення тварин:
              вантажне таксі з комфортними клітками з гарною вентиляцією і
              захистом від травм.
            </li>
            <li>
              <span className="listNumber-transportationAnimals">2</span> Ціна
              доставки тварин по Україні: у звичайному транспорті, чи то
              залізниця, чи то авіація, існують суворі правила, які не завжди
              враховують благополуччя домашніх улюбленців, та й ціна кусається.
              Якщо вас цікавить доступна ціна перевезення тварин по Україні,
              наше зоотаксі стане оптимальним вибором.
            </li>
            <li>
              <span className="listNumber-transportationAnimals">3</span>{' '}
              Досвід: у нас хороша репутація і великий досвід роботи з різними
              тваринами. Нам завжди до снаги перевезення собак у машині, котів і
              навіть екзотичних тварин.
            </li>
          </ul>
          <h4>
            Ми завжди готові до виконання найбільш незвичайних замовлень і
            забезпечимо вашого вихованця максимальним комфортом під час поїздки.
          </h4>
        </div>
      </div>
      <div className="allowedAnimals-transportationAnimals">
        <h2>Які тварини допускаються до перевезення</h2>
        <ul>
          <li>
            <span className="checkIcon-transportationAnimals">✔</span> Рибки
            перевозяться в спеціальних акваріумах або транспортувальних пакетах;
          </li>
          <li>
            <span className="checkIcon-transportationAnimals">✔</span> Доставка
            собак по Україні та птахів здійснюється в спеціальних клітках;
          </li>
          <li>
            <span className="checkIcon-transportationAnimals">✔</span> Кішки
            можуть подорожувати в спеціальних переносках;
          </li>
          <li>
            <span className="checkIcon-transportationAnimals">✔</span> Гризуни
            можуть перебувати в спеціальних клітках;
          </li>
          <li>
            <span className="checkIcon-transportationAnimals">✔</span> Змії і
            черепахи також транспортуються в акваріумах.
          </li>
        </ul>
        <p>
          На таксі собака, кішка та інші тварини почуваються затишно: менше
          стресу і дискомфорту, ніж у інших видів транспорту.
        </p>
        <h2>Відповіді на питання</h2>
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faqQuestion-transportationAnimals"
              onClick={() => toggleQuestion(index)}
            >
              {item.question}
              <span>{openQuestionIndex === index ? '▲' : '▼'}</span>
            </button>
            {openQuestionIndex === index && (
              <p className="faqAnswer-transportationAnimals">{item.answer}</p>
            )}
          </div>
        ))}
        <div className="contactSection-transportationAnimals">
          <div className="contactConsultant-transportationAnimals">
            <h2>Зв’язатися з консультантом по доставці?</h2>
            <div className="consultantInfo-transportationAnimals ">
              <img src={consultant} className="img-transportationAnimals" />
              <p className="consultant-transportationAnimals">Олег</p>
              <p className="consultant-transportationAnimals">
                +380 67 815 37 16
              </p>
              <img
                src={viber}
                className="socialIconsImg-transportationAnimals"
                href="viber://chat?number=+380678153716"
                height={'50px'}
                width={'50px'}
              />
              <img
                src={''}
                className="socialIconsImg-transportationAnimals"
                href="https://t.me/username"
              />
            </div>
          </div>

          <div className="orderForm-transportationAnimals">
            <h3>Надіслати замовлення на перевезення по Україні</h3>
            <form>
              <input type="email" placeholder="E-mail" required />
              <input type="text" placeholder="Ім'я, телефон" required />
              <textarea placeholder="Зміст запиту" required></textarea>
              <button type="submit" className="btn-transportationAnimals">
                Оформити замовлення
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportationAnimals;
