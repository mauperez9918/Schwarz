import "./MapSection.css";

const MapSection = () => {
  return (
    <section className="map-section">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.49176487524!2d-79.48391625738259!3d9.018824131140457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca9f22e3b0df9%3A0xe90b5fa418bd497f!2sa%2C%20Av.%206%20Sur%206%2C%20Panam%C3%A1!5e0!3m2!1ses!2suy!4v1698712818718!5m2!1ses!2suy"></iframe>

      <div className="map-text">
        <h3>Arma tu cotizacion</h3>
        <div>
          <span>Añadir al carrito:</span>
          <ul>
            <li>
              Busca los productos y haz clic en Añadir al carrito para
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
              Haz click en solicitar para enviar el formulario y realizar la
              cotizacion.
            </li>
          </ul>
        </div>

        <div>
          <span> Revise el Mail:</span>

          <ul>
            <li>
              Una vez enviado el formulario se le contestara a la brevedad por
              medio de la informacion de contacto
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
