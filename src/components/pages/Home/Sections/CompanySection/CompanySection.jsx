import "./CompanySection.css";

const CompanySection = () => {
  return (
    <section className="company-section">
      <div className="company-text">
        <h3>Quienes somos?</h3>
        <p>
          Somos un laboratorio autoindustrial líder en investigación y
          desarrollo de tecnologías automotrices de vanguardia. Nos dedicamos a
          mejorar la seguridad, eficiencia y rendimiento de los vehículos,
          contribuyendo al avance de la industria automotriz.
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1698718214/Schwarz/87549c34202171d178cc20c3c4061125_xgffla.jpg"
        alt="Quienes Somos"
      />
    </section>
  );
};

export default CompanySection;
