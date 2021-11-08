import React, { useState, useEffect } from "react";
import axios from "axios";
import {Modal, ModalBody} from "reactstrap";
import Ejemplo from '../UserSectiongeneral'

 
export default function User() {
  const [User, setUser] = useState([]);
  const [modal, setModal] = useState(false);

  const abrirModal =()=>{
    setModal(true)
  }

  const cerrarModal =()=>{
    setModal(false)
  }


  useEffect(() => {
    axios.get("http://localhost:3001/user").then((response) =>{
      setUser(response.data);
    }) 
  });

    


  return (
    <> 
      {User.map((value, key) => (
        <div className="col-12 shadow p-3 mb-2 bg-body rounded card d-inline">
          <div class="row"> 
            <div class="col-1 d-inline">
              <div class="form-check form-check-inline ">
                <input
                  class="form-check-input mt-5"
                  type="checkbox"
                  value=""
                  id="flexCheckIndeterminate"
                />
              </div>
            </div>

            <div class="col-1 d-inline-block me-4 " onClick={abrirModal}>
              <h2 class=" py-2 px-3 mt-4  d-inline-block rounded text-center border bg-danger text-white">
                {value.id}
              </h2>
            </div>

            <div class="col-6 d-inline mt-5">
              <p class="h5 mb-3"><b>Usuario:</b>  {value.username}</p>
              
            </div>

            <div class="col d-inline mx-2 p-3">
              <b class="d-block mt- mx-3">
                Status:{" "}
                <p 
                  className={
                    value.status === true
                      ? "text-white bg-success rounded d-inline px-2 "
                      : value.status === false
                      ? "text-white bg-warning rounded d-inline px-2 "
                      : "text-white bg-danger rounded d-inline px-2 "
                  }
                 >
                  {
                     value.status === true
                     ? "Activado"
                     : value.status === false
                     ? "Descativado"
                     : "Descativado" 
                  }
                </p>{" "}
              </b>

              <b class="d-block mt-3 mx-3">
                Categoria:{" "}
                <p 
                  className={
                    value.user_category_id === 1
                      ? "text-white bg-success rounded d-inline px-2 "
                      : value.user_category_id === 2
                      ? "text-white bg-warning rounded d-inline px-2 "
                      : "text-white bg-warning rounded d-inline px-2 "
                  }
                 >
                  {
                     value.user_category_id === 1
                     ? "Administrador"
                     : value.user_category_id === 2
                     ? "Pasante"
                     : "Pasante" 
                  }
                </p>{" "}
              </b>
              

            </div>

            <br />
          </div>
        </div>
      ))}

      <Modal className="modal-xl position-center me-5"
        isOpen={modal}>
       <ModalBody className="">
          <Ejemplo/>
          <button className="btn btn-primary mt-3" onClick={cerrarModal}>Cerrar</button>
       </ModalBody>
      </Modal>

    </>
  );
}
