import React from "react";

export default function HeroSection() {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-1 fw-bold">Bienvenido a AI Logic</h1>
        <h1 className="display-5 fw-bold">Pasante</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
          Saludos futuro pasante, si estas en busca de experiencia como
          programador, en una empresa que te introduzca en este mundo del
          desarrollo, <br />
          te invitamos a formar parte de nuestra empresa especializada en
          brindar soluciones tecnologias internacionalmente
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Aplicar
            </button>

          </div>
        </div>
      </div>
      <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Quienes somos?</h1>
        <p class="col-md-8 fs-4">En <strong>AI Logic</strong> Somos una empresa dominicana con enfoque tecnologico a la banguardia donde nuestras soliciones cumple con los estandares mas competitivos en el mercado y siempre apuntamos a un sistema util, escalable, distinguido y por supuesto eficiente </p>
      </div>
    </div>
    </div>
  );
}
