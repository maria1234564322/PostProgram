import Home from './client/home/Home';
import Registration from './client/Registration/Registration';
import Exit from './client/Exit/Exit';
import Actions from './client/Actions/Actions';
import DeliveryAcrossUkraine from './client/DeliveryAcrossUkraine/DeliveryAcrossUkraine';
import UserOffice from './client/UserOffice/UserOffice';
import TransportationAnimals from './client/TransportationAnimals/TransportationAnimals';
import CreateShipment from './client/CreateShipment/CreateShipment';
import CalculationCreateShipment from './client/CalculationCreateShipment/CalculationCreateShipment';

const ClientRoutes = {
  HomePage: {
    name: 'Home',
    pattern: 'home',
    component: <Home />,
  },
  Registration: {
    name: 'Registration',
    pattern: 'registration',
    component: <Registration />,
  },
  Exit: {
    name: 'Exit',
    pattern: 'exit',
    component: <Exit />,
  },
  UserOffice: {
    name: 'UserOffice',
    pattern: 'userOffice',
    component: <UserOffice />,
  },
  CreateShipment: {
    name: 'CreateShipment',
    pattern: 'createShipment',
    component: <CreateShipment />,
  },
  DeliveryAcrossUkraine: {
    name: 'DeliveryAcrossUkraine',
    pattern: 'deliveryAcrossUkraine',
    component: <DeliveryAcrossUkraine />,
  },
  CalculationCreateShipment: {
    name: 'CalculationCreateShipment',
    pattern: 'calculationCreateShipment',
    component: <CalculationCreateShipment />,
  },
  TransportationAnimals: {
    name: 'TransportationAnimals',
    pattern: 'transportationAnimals',
    component: <TransportationAnimals />,
  },
  Actions: {
    name: 'Actions',
    pattern: 'actions',
    component: <Actions />,
  },
};

export default ClientRoutes;
