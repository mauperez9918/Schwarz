import { Link } from "react-router-dom";
import ProductCard from "../../../common/ProductCard/ProductCard";
import "./ItemList.css";
import { categories } from "../categories";

const ItemList = ({ products }) => {
  return (
    <>
      <main>
        <div className="main-content">
          <div className="categories-section">
            <div className="categories-container">
              <h4 className="text-medium ">Categorías</h4>

              <div className="categories-list">
                <input
                  type="text"
                  className="input-categories"
                  placeholder="Buscar un producto..."
                />

                <ul>
                  {categories.map((category) => {
                    return (
                      <Link
                        key={category.categoryName}
                        to={`/categories/${category.categoryName}`}
                      >
                        <li>{category.categoryName}</li>
                        <ul>
                          {category.subCategories.map((subCategory) => {
                            return <li key={subCategory}>{subCategory}</li>;
                          })}
                        </ul>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="products-container">
              <h4 className="text-medium products-title">asd</h4>

              <div className="products-list">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ItemList;
