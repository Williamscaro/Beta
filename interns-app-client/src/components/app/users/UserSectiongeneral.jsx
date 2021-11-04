
import Users from "./User";
import React from "react";
import MenuUser from "./MenuUser";



export default function UserSectiongeneral() {
  return (
    <>

    <div class="container">
        <div class="row py-5 border-bottom">
        
          <div class="col-sm-12 col-md- shadow p-3 mb-4 bg-body rounded card">

            <Users/>
      
          </div>

    <div class="col-md-12 col-12 pt-4 d-none d-sm-none d-md-block"></div>
    
    
          <div class=" col-8 col-md-12 text-center">

          <div class="row d-flex justify-content-start ">
              <div class="col-md-12 ">
                  <div class="main-card card shadow ">
                      <div class="card-body">
                        <MenuUser/>
                      </div>
                  </div>
              </div>
           </div>

          </div>

          
          
        </div>
  
    </div>


    </>
  );
}
