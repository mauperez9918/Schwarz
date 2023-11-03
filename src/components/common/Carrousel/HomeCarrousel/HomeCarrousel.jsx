import CarrouselCard from "../CarrouselCard/CarrouselCard";
import { images } from "../images";
import "./HomeCarrousel.css";

const HomeCarrousel = () => {
  return (
    <>
      <h2 className="carrousel-title">Categorías</h2>
      <section className="carrousel-section">
        {images.map((images, id) => {
          return <CarrouselCard images={images} key={id} />;
        })}
      </section>
    </>
  );
};

export default HomeCarrousel;
