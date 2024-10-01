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
          <div className="container-actions">
            <div className="card-actions">
              <div
                className="banner-actions"
                onClick={() =>
                  (window.location.href = 'https://makeup.com.ua/ua/')
                }
              >
                <div className="bannerBloc-actions">
                  <img src={makeup} className="brend-actions" />
                  <p className="bannerTextL-actions">
                    {' '}
                    До завершення акції: 10 днів
                  </p>
                </div>
                <div className="bannerBloc-actions">
                  <div>
                    <p className="bannerText-actions">
                      {' '}
                      Makeup: Безплатна доставка в поштомат від 399 грн за
                      промокодом poshtomat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-actions">
              <div
                className="banner-actions"
                onClick={() =>
                  (window.location.href = 'https://malva-style.com/')
                }
              >
                <div className="bannerBloc-actions">
                  <img src={malva} className="brend-actions" />
                  <p className="bannerTextL-actions">
                    До завершення акції: 30 днів
                  </p>
                </div>
                <div className="bannerBloc-actions">
                  <div>
                    <p className="bannerText-actions">
                      {' '}
                      Malva: Безплатна доставка при замовленні від 2х комплектів
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <div
                className="banner-actions"
                onClick={() =>
                  (window.location.href = 'https://dnipro-m.ua/sale/')
                }
              >
                <div className="bannerBloc-actions">
                  <img src={dninto} className="brend-actions" />
                  <p className="bannerTextL-actions">
                    {' '}
                    До завершення акції: 23 дні
                  </p>
                </div>
                <div className="bannerBloc-actions">
                  <div>
                    <p className="bannerText-actions">
                      {' '}
                      DNIPRO M: Безплатна доставка від 3000 грн
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <div
                className="banner-actions"
                onClick={() => (window.location.href = 'https://www.itbox.ua/')}
              >
                <div className="bannerBloc-actions">
                  <img src={itbox} className="brend-actions" />
                  <p className="bannerTextL-actions">
                    {' '}
                    До завершення акції: 5 днів
                  </p>
                </div>
                <div className="bannerBloc-actions">
                  <div>
                    <p className="bannerText-actions">
                      {' '}
                      ITBOX: Безплатна доставка та -10% за промокодом poshta
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <div
                className="banner-actions"
                onClick={() =>
                  (window.location.href = 'https://masterzoo.ua/ua/')
                }
              >
                <div className="bannerBloc-actions">
                  <img src={masterZoo} className="brend-actions" />
                  <p className="bannerTextL-actions">
                    {' '}
                    До завершення акції: 17 днів
                  </p>
                </div>
                <div className="bannerBloc-actions">
                  <div>
                    <p className="bannerText-actions">
                      MasterZoo: Безплатна доставка від 850 грн
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <div className="banner-actions">
                <div className="bannerBloc-actions">
                  <img
                    src={zi}
                    className="brend-actions"
                    onClick={() => (window.location.href = 'https://3i.ua/')}
                  />
                  <p className="bannerTextL-actions">
                    {' '}
                    До завершення акції: 10 днів
                  </p>
                </div>
                <div className="bannerBloc-actions">
                  <div>
                    <p className="bannerText-actions">
                      {' '}
                      <div className="bannerText-actions">
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
