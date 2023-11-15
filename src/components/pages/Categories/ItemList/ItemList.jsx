import { Link } from "react-router-dom";
import ProductCard from "../../../common/ProductCard/ProductCard";
import "./ItemList.css";

const ItemList = ({ products }) => {
  const categories = [
    "Mangueras",
    "Cilindros",
    "Reguladores y Unidades de Mantenimiento",
    "Valvulas y Electrovalvulas",
    "Conectores Instantaneos",
    "Reguladores",
    "Llave de Linea",
    "Valvulas no retorno",
    "Interruptores Magneticos",
    "Calefactores Tubulares",
    "Electronica industrial",
    "Teflon",
    "Correas",
    "Cuchillas",
    "Termo Cintas",
    "Impresoras Hot Stamping",
  ];
  return (
    <>
      <main>
        <div className="main-content">
          <div className="categories-section">
            <div className="categories-list">
              <input
                type="text"
                className="input-categories"
                placeholder="Buscar un producto..."
              />
              <ul>
                {categories.map((categorie) => {
                  return (
                    <Link key={categorie}>
                      <li>{categorie}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div className="products-list">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ItemList;
