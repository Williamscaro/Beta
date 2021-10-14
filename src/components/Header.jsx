import React from "react";

export default function Header() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
    <img src={process.env.PUBLIC_URL + '/img/medium.png'} alt="logo" srcset="" width ={155} height = {55}/>
 </a>

    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
      <li><a href="#" className="nav-link px-2 link-dark">Acerca de Nosotros</a></li>
      <li><a href="#" className="nav-link px-2 link-dark">Contacto</a></li>
      <li><a href="#" className="nav-link px-2 link-dark">Detalles</a></li>
    </ul>

    <div className="col-md-3 text-end">
      <button type="button" className="btn btn-outline-primary me-2">Login</button>
      <button type="button" className="btn btn-primary">Aplicar</button>
    </div>
  </header>

  );
}
