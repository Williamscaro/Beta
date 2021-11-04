import React, { useState, useEffect } from "react";
import { getUser } from "../../../helpers/usuario";
import "../../../styles/style.css";

export default function Ticket() {
  const [User, setUser] = useState([]);

 

  useEffect(() => {
    const dataUser = getUser();
    setUser(dataUser);
  });

  return (
    <>
      {User.map(({ id, nameuser, group, status, firstletter }) => (

          
        <div class="row" >
                
        <div class="col-1 d-inline" >       
        </div>

        <div class="col-1 d-inline-block me-4" >
          <h2 class=" py-2 px-3 mt-4  d-inline-block rounded text-center border bg-primary text-white">{firstletter}</h2>     
        </div>

          <div class="col-6 d-inline mt-2">
           <p class=""><b>{nameuser}</b></p>
           <p class="d-inline mx-4"><b>{group}</b></p>
           <p class="d-inline">{status}</p>
          </div>

        <div class="col d-inline mx-2 p-3">
          <button class="btn btn-success w-50 mx-5">+ Asignaciones</button>
        </div>

        <br/>          
        </div>
          
      ))}
    </>
  );
}
