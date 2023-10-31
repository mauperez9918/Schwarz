import Categories from "../components/pages/Categories/Categories";
import Contact from "../components/pages/Contact/Contact";
import Home from "../components/pages/Home/Home";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "categorias",
    path: "/categorias",
    Element: Categories,
  },
  {
    id: "contact",
    path: "/contact",
    Element: Contact,
  },
];
