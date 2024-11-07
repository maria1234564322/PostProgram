import './CalculationCreateShipment.css';
import { useState } from 'react';
import ParcelAndCargo from './DocumentsCalculationCreateShipment';
import Documents from './ParcelCalculationCreateShipment';

const selectedState = {
  document: 1,
  parcel: 2,
};

const CalculationCreateShipment = () => {
  const [selectedButton, setSelectedButton] = useState(selectedState.document);

  const onButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <>
      <div className="background">
        <div className="container-calculationCreateShipmen">
          <div>
            <div>
              <h1 className="h1-calculationCreateShipmen">
                Розрахувати вартість відправлення
              </h1>
            </div>
            <div className="top-calculationCreateShipmen">
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

          {selectedButton == selectedState.parcel ? (
            <ParcelAndCargo />
          ) : (
            <Documents />
          )}
        </div>
      </div>
    </>
  );
};

export default CalculationCreateShipment;
