import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Estilos
import '../styles/index.css';

// Importa el componente Home
import Home from './Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
