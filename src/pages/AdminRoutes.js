import OrdersPage from './admin/orders/OrdersPage';
import Index from './admin/Index/Index';
const AdminRoutes = {
  CreateProduct: {
    name: 'Orders',
    path: 'admin/orders',
    component: <OrdersPage />,
  },
  Index: {
    name: 'Index',
    path: 'admin/index',
    component: <Index />,
  },
};
export default AdminRoutes;
