import React from "react";
import { Link } from "react-router-dom";
export default function HomeRegister() {
  return (
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center min-h">
      <main class="px-3">
        <h1>Bienvenido al Registro de Pasantes</h1>
        <p class="lead">
          Cover is a one-page template for building simple and beautiful home
          pages. Download, edit the text, and add your own fullscreen background
          photo to make it your own.
        </p>
        <Link to="/register/general-info">
          <button className="btn btn-lg btn-secondary fw-bold border-white bg-color-primary">
            Comenzar
          </button>
        </Link>
      </main>
    </div>
  );
}
