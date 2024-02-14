// Footer.jsx
import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Footer.css"; // Importa los estilos

function Footer() {
  return (
    <footer className="footer-container">
      <div>
        <p>&copy; 2024 AppdeNotas | Todos los derechos reservados | </p>
      </div>
      <div className="github-link">
        <a
          href="https://github.com/alejoramon/blocDeNotas-frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
