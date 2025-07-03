import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';


function Contacto() {
  return (
    <div className="contact-container"> {/* Agrega una clase para estilizar todo el contenedor */}
      <h1>Puede contactarnos a través de:</h1>
      <div className="social-links">
        <a href="https://facebook.com/tecno-spider" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com/tecno-spider" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://instagram.com/tecno-spider" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      <p>Te invitamos a unirte a nuestras redes sociales que se indicarán a continuación para que podamos brindarte la mejor atención. Para cualquier consulta, asistencia o simplemente para compartir tus comentarios, estamos a tu disposición.</p>
      </div>

      {/* Aquí podrías insertar el formulario de contacto si lo deseas */}
      {/* <FormularioDeContacto /> */}
    </div>
  );
}

export default Contacto;