import { useState } from 'react';
import ParcelShipment from './ParcelShipment';
import DocumentShipment from './DocumentShipment';

const selectedState = {
  document: 'document',
  parcel: 'parcel',
};

const CreateShipment = () => {
  const [selectedButton, setSelectedButton] = useState(selectedState.parcel);

  const onButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <>
      <div className="background">
        <div className="container-createShipment">
          <div>
            <h1 className="h1-createShipment">Створити відправлення</h1>

            <div className="top-createShipment">
              <h2>Вид посилки</h2>
            </div>
            <div className="buttom-createShipment">
              <div
                className={`left ${
                  selectedButton === selectedState.parcel
                    ? 'colorButton-clicked'
                    : ''
                }`}
                onClick={() => onButtonClick(selectedState.parcel)}
              >
                <h2>Посилки та вантажі</h2>
              </div>
              <div
                className={`right ${
                  selectedButton === selectedState.document
                    ? 'colorButton-clicked'
                    : ''
                }`}
                onClick={() => onButtonClick(selectedState.document)}
              >
                <h2>Документи</h2>
              </div>
            </div>
          </div>

          {/* Вибір між посилкою та документом */}
          {selectedButton === selectedState.parcel && <ParcelShipment />}
          {selectedButton === selectedState.document && <DocumentShipment />}
        </div>
      </div>
    </>
  );
};

export default CreateShipment;
