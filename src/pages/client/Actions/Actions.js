import './Actions.css';
import makeup from '../../../images/makeup.png';
import malva from '../../../images/malva.jpg';
import dninto from '../../../images/dnipro.jpg';
import zi from '../../../images/zi.jpg';
import masterZoo from '../../../images/masterZoo.png';
import itbox from '../../../images/itbox.jpg';

const Actions = () => {
  return (
    <>
      <div className="background">
        <div className="containerCreateShipment">
          <div className="containerActions">
            <div className="card">
              <div
                className="banner"
                onClick={() =>
                  (window.location.href = 'https://makeup.com.ua/ua/')
                }
              >
                <div className="bannerBloc">
                  <img src={makeup} className="brend" />
                  <p className="bannerTextL"> До завершення акції: 10 днів</p>
                </div>
                <div className="bannerBloc">
                  <div>
                    <p className="bannerText">
                      {' '}
                      Makeup: Безплатна доставка в поштомат від 399 грн за
                      промокодом poshtomat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div
                className="banner"
                onClick={() =>
                  (window.location.href = 'https://malva-style.com/')
                }
              >
                <div className="bannerBloc">
                  <img src={malva} className="brend" />
                  <p className="bannerTextL">До завершення акції: 30 днів</p>
                </div>
                <div className="bannerBloc">
                  <div>
                    <p className="bannerText">
                      {' '}
                      Malva: Безплатна доставка при замовленні від 2х комплектів
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="banner"
                onClick={() =>
                  (window.location.href = 'https://dnipro-m.ua/sale/')
                }
              >
                <div className="bannerBloc">
                  <img src={dninto} className="brend" />
                  <p className="bannerTextL"> До завершення акції: 23 дні</p>
                </div>
                <div className="bannerBloc">
                  <div>
                    <p className="bannerText">
                      {' '}
                      DNIPRO M: Безплатна доставка від 3000 грн
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="banner"
                onClick={() => (window.location.href = 'https://www.itbox.ua/')}
              >
                <div className="bannerBloc">
                  <img src={itbox} className="brend" />
                  <p className="bannerTextL"> До завершення акції: 5 днів</p>
                </div>
                <div className="bannerBloc">
                  <div>
                    <p className="bannerText">
                      {' '}
                      ITBOX: Безплатна доставка та -10% за промокодом poshta
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="banner"
                onClick={() =>
                  (window.location.href = 'https://masterzoo.ua/ua/')
                }
              >
                <div className="bannerBloc">
                  <img src={masterZoo} className="brend" />
                  <p className="bannerTextL"> До завершення акції: 17 днів</p>
                </div>
                <div className="bannerBloc">
                  <div>
                    <p className="bannerText">
                      MasterZoo: Безплатна доставка від 850 грн
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="banner">
                <div className="bannerBloc">
                  <img
                    src={zi}
                    className="brend"
                    onClick={() => (window.location.href = 'https://3i.ua/')}
                  />
                  <p className="bannerTextL"> До завершення акції: 10 днів</p>
                </div>
                <div className="bannerBloc">
                  <div>
                    <p className="bannerText">
                      {' '}
                      <div class="font-main text-hd-20 font-medium leading-6 l-md:text-hd-16 pt-0.5">
                        АПТЕКА ЗІ: Безплатна доставка від 499 грн та знижки до
                        40%
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Actions;
