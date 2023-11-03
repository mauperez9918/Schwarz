import HomeCarrousel from "../../common/Carrousel/HomeCarrousel/HomeCarrousel";
import "./Home.css";
import CompanySection from "./Sections/CompanySection/CompanySection";
import InfoSection from "./Sections/InfoSection/InfoSection";
import MapSection from "./Sections/MapSection/MapSection";
import PopularSection from "./Sections/PopularSection/PopularSection";

const Home = () => {
  return (
    <>
      <main className="flex">
        <div className="container">
          <img
            className="banner"
            src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1698738339/Schwarz/9a0c598205fe88cc3c021290781ec2b7_sdkvge.jpg"
          />
        </div>

        <div className="main-content">
          <HomeCarrousel />
          <CompanySection />
          <PopularSection />
          <MapSection />
          <InfoSection />
        </div>
      </main>
    </>
  );
};

export default Home;
