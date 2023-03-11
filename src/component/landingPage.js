import React, { useState } from 'react';
import logo from './logo.png';

export default function LandingPage() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = { nombre, email, telefono };
    fetch('http://127.0.0.1:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
    setNombre('');
    setEmail('');
    setTelefono('');
  }

  return (
    <div className="landing-page">
      <header className="header">
        <img src={logo} alt="Logo de la aplicación" className="logo"/>
        <h1 className="title">Cuidado para Adultos Mayores</h1>
        <p className="subtitle">Cuida a tus seres queridos con la ayuda de nuestros cuidadores profesionales</p>
      </header>

      <main className="main">
        <div className="hero">
        </div>
        
        <div className="form-container">
          <h2>Recibe información sobre nuestros servicios</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="nombre" className="form-label">Nombre completo</label>
              <input type="text" className="form-control" id="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="telefono" className="form-label">Número de teléfono</label>
              <input type="tel" className="form-control" id="telefono" value={telefono} onChange={(event) => setTelefono(event.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Recibir información</button>
          </form>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="text-muted">© 2023 Cuidado para Adultos Mayores. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}