import './UserHomePage.css';

const UserHomePage = () => {
  return (
    <div>
      <div className="background">
        <div className="containerUserOffice">
          <div className="blockserOffice">
            <div className="outer-block">
              <h1>Мoї відправлення</h1>
            </div>
          </div>
          <div className="blockserOffice">
            <div className="outer-block">
              <h1>Створити відправлення</h1>
            </div>
          </div>
          <div className="blockserOffice">
            <div className="outer-block">
              <h1>Відстежити відправлення</h1>
            </div>
          </div>
          <div className="blockserOffice">
            <div className="outer-block">
              <h1>Акції та пропозиції</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;
