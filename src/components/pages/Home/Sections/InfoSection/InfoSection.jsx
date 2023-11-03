import "./InfoSection.css";

const InfoSection = () => {
  return (
    <section className="info-section">
      <ul className="info-content">
        <li className="info-item">
          <div className="elipse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M4.5 15H31.5M10.5 22.5H10.515M16.5 22.5H19.5M4.5 12C4.5 10.8065 4.97411 9.66193 5.81802 8.81802C6.66193 7.97411 7.80653 7.5 9 7.5H27C28.1935 7.5 29.3381 7.97411 30.182 8.81802C31.0259 9.66193 31.5 10.8065 31.5 12V24C31.5 25.1935 31.0259 26.3381 30.182 27.182C29.3381 28.0259 28.1935 28.5 27 28.5H9C7.80653 28.5 6.66193 28.0259 5.81802 27.182C4.97411 26.3381 4.5 25.1935 4.5 24V12Z"
                stroke="#4B5D78"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="info-item-text">
            <span className="text-body">Solicitar Cotización</span>
            <span className="text-small">Cargar los productos al carrito</span>
          </div>
        </li>

        <li className="info-item">
          <div className="elipse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M4.5 15H31.5M10.5 22.5H10.515M16.5 22.5H19.5M4.5 12C4.5 10.8065 4.97411 9.66193 5.81802 8.81802C6.66193 7.97411 7.80653 7.5 9 7.5H27C28.1935 7.5 29.3381 7.97411 30.182 8.81802C31.0259 9.66193 31.5 10.8065 31.5 12V24C31.5 25.1935 31.0259 26.3381 30.182 27.182C29.3381 28.0259 28.1935 28.5 27 28.5H9C7.80653 28.5 6.66193 28.0259 5.81802 27.182C4.97411 26.3381 4.5 25.1935 4.5 24V12Z"
                stroke="#4B5D78"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="info-item-text">
            <span className="text-body">Envio Nacional e Internacional</span>
            <span className="text-small">Servicio a domicilio</span>
          </div>
        </li>

        <li className="info-item">
          <div className="elipse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M4.5 15H31.5M10.5 22.5H10.515M16.5 22.5H19.5M4.5 12C4.5 10.8065 4.97411 9.66193 5.81802 8.81802C6.66193 7.97411 7.80653 7.5 9 7.5H27C28.1935 7.5 29.3381 7.97411 30.182 8.81802C31.0259 9.66193 31.5 10.8065 31.5 12V24C31.5 25.1935 31.0259 26.3381 30.182 27.182C29.3381 28.0259 28.1935 28.5 27 28.5H9C7.80653 28.5 6.66193 28.0259 5.81802 27.182C4.97411 26.3381 4.5 25.1935 4.5 24V12Z"
                stroke="#4B5D78"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="info-item-text">
            <span className="text-body">Horarios Presenciales</span>
            <span className="text-small">Lun-vie. 8 a 16hs. sab 8 a 12hs </span>
          </div>
        </li>

        <li className="info-item">
          <div className="elipse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M4.5 15H31.5M10.5 22.5H10.515M16.5 22.5H19.5M4.5 12C4.5 10.8065 4.97411 9.66193 5.81802 8.81802C6.66193 7.97411 7.80653 7.5 9 7.5H27C28.1935 7.5 29.3381 7.97411 30.182 8.81802C31.0259 9.66193 31.5 10.8065 31.5 12V24C31.5 25.1935 31.0259 26.3381 30.182 27.182C29.3381 28.0259 28.1935 28.5 27 28.5H9C7.80653 28.5 6.66193 28.0259 5.81802 27.182C4.97411 26.3381 4.5 25.1935 4.5 24V12Z"
                stroke="#4B5D78"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="info-item-text">
            <span className="text-body">Seguridad y calidad</span>
            <span className="text-small">Calidad Garantizada</span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default InfoSection;
