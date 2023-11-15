import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} />
      <div className="card-info">
        <h4>{product.name}</h4>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductCard;
