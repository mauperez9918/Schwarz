import "./CarrouselCard.css";

const CarrouselCard = ({ images }) => {
  return (
    <>
      <div className="carrousel-card border-r">
        <div className="blue-background border-r"></div>
        <div className="image-container">
          <img className="border-r" src={images[0]} />
        </div>
        <div className="secondary-image-container">
          <img className="border-r" src={images[1]} />
          <img className="border-r" src={images[2]} />
          <img className="border-r" src={images[3]} />
        </div>
        <span className="carrousel-text">Ver más</span>
      </div>
    </>
  );
};

export default CarrouselCard;
