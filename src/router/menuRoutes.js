import ItemListContainer from "../components/pages/Categories/ItemList/ItemListContainer";
import Home from "../components/pages/Home/Home";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "categories",
    path: "/categories",
    Element: ItemListContainer,
  },
  {
    id: "categoryName",
    path: "/categories/:categoryName",
    Element: ItemListContainer,
  },
];
