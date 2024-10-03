import './UserHomePage.css';

const UserHomePage = () => {
  return (
    <>
      <div className="background">
        <div className="container-userOffice">
          <div className="blockser-userOffice">
            <div>
              <h1>Мoї відправлення</h1>
            </div>
          </div>
          <div className="blockser-userOffice">
            <div>
              <h1>Створити відправлення</h1>
            </div>
          </div>
          <div className="blockser-userOffice">
            <div>
              <h1>Відстежити відправлення</h1>
            </div>
          </div>
          <div className="blockser-userOffice">
            <div>
              <h1>Акції та пропозиції</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHomePage;
