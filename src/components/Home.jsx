import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to the Notes App</h1>
      <div className="content">
        <p>
          "Optimiza tu productividad con AppDeNotas. La herramienta esencial
          para dominar tu trabajo y organizar tu vida. Ya sea en tu escritorio o
          dispositivo móvil, esta aplicación eficiente gestiona tanto tu trabajo
          como tu vida cotidiana".
        </p>
      </div>
    </div>
  );
}

export default Home;
