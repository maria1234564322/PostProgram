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
    <div>
      <div className="background">
        <div className="containerCreateShipment">
          <div>
            <h1 className="placeDispatch">Створити відправлення</h1>

            <div className="top">
              <h2>Вид посилки</h2>
            </div>
            <div className="bottom">
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
    </div>
  );
};

export default CreateShipment;
