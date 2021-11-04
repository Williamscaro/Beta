import React from 'react'

import {LikeIcon} from "../../icons";



export default function Confirmation() {
    return (
        <>

        <div className="container">

            <div className="row">

            <div className="col-md-2 col-lg-2 mx-3">
            </div>

                <div className="col col-md-8 col-lg-7  shadow d-md-block text-center py-5 ">

                    <LikeIcon/>
                    <div className="h3 d-inline">Perfecto!</div>
                    <div className="h3 d-block">Registro de Usuario.</div><br/><br/>

                    <div className="h6">Usted ha Registrado correctamente, todo  a salido bien.</div>
               
                </div>

                <div className="col-md-2 col-lg-2 mx-3">
            </div>

                
           
            </div>
        </div>
        </>
    )
}
