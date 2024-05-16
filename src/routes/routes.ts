import Brands from "../pages/brands";
import Cart from "../pages/cart";
import Home from "../pages/home";
import OnSale from "../pages/on sale";

export const ROUTES: RoutesProps[] = [
  {
    name: "Shop.co",
    path: "/",
    component: Home,
  },
  {
    name: "On Sale",
    path: "onsale",
    component: OnSale,
  },

  {
    name: "New Arrivals",
    path: "/newarrivals",
    component: OnSale,
  },
  {
    name: "Brands",
    path: "/brands",
    component: Brands,
  },
  {
    name: "cart",
    path: "/cart",
    component: Cart,
  },
];
interface RoutesProps {
  name: string;
  path: string;
  component: () => React.ReactNode;
}
