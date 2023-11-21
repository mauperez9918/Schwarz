import "./PopularSection.css";
import { popularProducts } from "./popularProducts";

const PopularSection = () => {
  return (
    <section className="popular-section">
      <h2>Productos Populares</h2>

      <div className="populars-products">
        {popularProducts.map((product) => {
          return (
            <div className="popular-container border-r" key={product.id}>
              <img
                className="popular-product border-r"
                src={product.image}
                alt={product.name}
              />

              <div className="container-description">
                <span>{product.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularSection;
