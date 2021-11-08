import React from "react";
import large from "../assets/images/large.png";
import { Link } from "react-router-dom";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <main class="form-signin rounded-bottom align-middle ">
        <form onSubmit={handleSubmit}>
          <img class="mb-4 " src={large} alt="" width="72" height="57" />
          <h2 class="h3 mb-3 fw-normal login-title">Login</h2>

          <div class="form-floating my-2">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Usuario</label>
          </div>
          <div class="form-floating  my-2">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Constraseña</label>
          </div>
          <div className="row">
            <div class="checkbox mb-3 col text-small">
              <label>Perdiste tu constraseña?</label>
            </div>
            <div class="checkbox mb-3 text-small col">
              <label>
                <a href="#" className=" text-small link-hover-red">
                  Recuperar
                </a>
              </label>
            </div>
          </div>

          <input
            type="submit"
            className="w-100 btn btn-lg bg-color-primary btn-send"
            value="Iniciar sección"
          />
          <p class="mt-5 mb-3 text-muted">
            No estas registrado aun?
            <Link to="/register" className="text-danger text-small">
              {" "}
              Registrate aquí
            </Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
}
