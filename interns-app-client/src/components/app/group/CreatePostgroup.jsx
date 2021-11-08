import React from 'react'
import {Formik, Form, Field, ErrorMessage, } from 'formik'
import * as Yup from 'yup';
import axios from "axios";


export default function CreatePostgroup() {
    
    const initialValues ={
        name: "",
        state: true
    }

    const validation = Yup.object().shape({
        name: Yup.string().required("Ingresa un nombre del grupo"),
    })

    const onSubmit = (data) =>{
        axios.post("http://localhost:3001/teams", data).then((response) =>{
            console.log("IT wolks")
          }) 
    }

    return ( 
        <div className="form-group">
            <Formik initialValues={initialValues} className="form-group" onSubmit={onSubmit} validationSchema={validation}>
                <Form>
                    <label htmlFor="" className="mb-1"><b>Ingrese:</b></label>
                    <ErrorMessage name="name" component="span" className="bg-danger mx-3 text-white px-2"/>
                    <Field className="form-control mb-3 " placeholder="Nombre del grupo" name="name" ></Field>

                    <div  className="mx-5">
                      <div  className="mx-5">
                       <button className="btn btn-primary mx-5 px-4" type="submit">Crear grupo</button> 
                     </div>                     
                    </div> 

                </Form>
            </Formik>       
        </div>
    )
}
