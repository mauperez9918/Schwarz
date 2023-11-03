import "./Home.css";

const Home = () => {
  return (
    <>
      <main>
        <div className="container">
          <img
            className="banner"
            src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1698738339/Schwarz/9a0c598205fe88cc3c021290781ec2b7_sdkvge.jpg"
          />
        </div>

        <div className="main-content">
          <section className="company-section">
            <div className="company-text">
              <h3>Quienes somos?</h3>
              <p>
                Somos un laboratorio autoindustrial líder en investigación y
                desarrollo de tecnologías automotrices de vanguardia. Nos
                dedicamos a mejorar la seguridad, eficiencia y rendimiento de
                los vehículos, contribuyendo al avance de la industria
                automotriz.
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1698718214/Schwarz/87549c34202171d178cc20c3c4061125_xgffla.jpg"
              alt="Quienes Somos"
            />
          </section>

          <section className="popular-section">
            <h2>Productos Populares</h2>
            <div className="populars-products">
              <div>
                <img
                  className="popular-product"
                  src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1698733965/Schwarz/3d77b0bfd1e099c0ba034cd99873f27f_jzgwag.png"
                  alt="Productos Populares"
                />
              </div>
              <div>
                <img
                  className="popular-product"
                  src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1698733965/Schwarz/3d77b0bfd1e099c0ba034cd99873f27f_jzgwag.png"
                  alt="Productos Populares"
                />
              </div>
              <div>
                <img
                  className="popular-product"
                  src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1698733965/Schwarz/3d77b0bfd1e099c0ba034cd99873f27f_jzgwag.png"
                  alt="Productos Populares"
                />
              </div>
              <div>
                <img
                  className="popular-product"
                  src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1698733965/Schwarz/3d77b0bfd1e099c0ba034cd99873f27f_jzgwag.png"
                  alt="Productos Populares"
                />
              </div>
              <div>
                <img
                  className="popular-product"
                  src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1698733965/Schwarz/3d77b0bfd1e099c0ba034cd99873f27f_jzgwag.png"
                  alt="Productos Populares"
                />
              </div>
              <div>
                <img
                  className="popular-product"
                  src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1698733965/Schwarz/3d77b0bfd1e099c0ba034cd99873f27f_jzgwag.png"
                  alt="Productos Populares"
                />
              </div>
            </div>
          </section>

          <section className="map-section">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.49176487524!2d-79.48391625738259!3d9.018824131140457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca9f22e3b0df9%3A0xe90b5fa418bd497f!2sa%2C%20Av.%206%20Sur%206%2C%20Panam%C3%A1!5e0!3m2!1ses!2suy!4v1698712818718!5m2!1ses!2suy"></iframe>

            <div className="map-text">
              <h3>Arma tu cotizacion</h3>
              <div>
                <span>Añadir al carrito:</span>
                <ul>
                  <li>
                    Busca los productos y haz clic en "Añadir al carrito" para
                    seleccionarlos.
                  </li>
                </ul>
              </div>

              <div>
                <span> Llenar y enviar el formulario:</span>

                <ul>
                  <li>En el carrito, verifica los productos.</li>
                  <li>Completa la información de contacto.</li>
                  <li>
                    Haz click en solicitar para enviar el formulario y realizar
                    la cotizacion.
                  </li>
                </ul>
              </div>

              <div>
                <span> Revise el Mail:</span>

                <ul>
                  <li>
                    Una vez enviado el formulario se le contestara a la brevedad
                    por medio de la informacion de contacto
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="info-section">
            <ul className="info-content">
              <li>
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
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span>Solicitar Cotización</span>
                <span>Cargar los productos al carrito</span>
              </li>

              <li>
                <span>Envio Nacional e Internacional</span>
                <span>Servicio a domicilio</span>
              </li>

              <li>
                <span>Horarios Presenciales</span>
                <span>Lun-vie. 8 a 16hs. sab 8 a 12hs </span>
              </li>

              <li>
                <span>Seguridad y calidad</span>
                <span>Calidad Garantizada</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
