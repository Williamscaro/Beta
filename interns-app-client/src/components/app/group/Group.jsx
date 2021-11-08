import React, { useState, useEffect } from "react";
import axios from "axios";
 
export default function Group() {
  const [Group, setGroup] = useState([]);


  
  useEffect(() => {
    axios.get("http://localhost:3001/teams").then((response) =>{
      setGroup(response.data);
    })

    
  });


  return (
    <>
      {Group.map((value, key) => (
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

            <div class="col-1 d-inline-block me-4">
              <h2 class=" py-2 px-3 mt-4  d-inline-block rounded text-center border bg-danger text-white">
                {value.id}
              </h2>
            </div>

            <div class="col-6 d-inline mt-4">
              <p class="h5 mt-3">Grupo: {value.name}</p>
              <p class="">
              </p>
            </div>

            <div class="col d-inline mx-2 p-3">
              <b class="d-block mt-3 mx-3">
                Status:{" "}
                <p 
                  className={
                    value.status == true
                      ? "text-white bg-success rounded d-inline px-2 "
                      : value.priority_id == false
                      ? "text-white bg-warning rounded d-inline px-2 "
                      : "text-white bg-danger rounded d-inline px-2 "
                  }
                 >
                  {
                     value.status == true
                     ? "Activado"
                     : value.priority_id == false
                     ? "Descativado"
                     : "Descativado" 
                  }
                </p>{" "}
              </b>
            </div>

            <br />
          </div>
        </div>
      ))}
    </>
  );
}
