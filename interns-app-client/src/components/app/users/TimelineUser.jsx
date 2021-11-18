import React, { useState, useEffect } from "react";
import { getTimeline } from "../../../helpers/timeline";
import "../../../styles/style.css";

export default function Ticket() {
  const [Timeline, setTimeline] = useState([]);

  useEffect(() => {
    const dataTimeline = getTimeline();
    setTimeline(dataTimeline);
  });

  return (

      <>
      <h5 className="mt-3 ">Linea de tiempo</h5>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
      <div className="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
  
  {Timeline.map(({ id, horaentrada, actividad, horactividad, reunion, reunionhora}) => (

      

   <div class="vertical-timeline-item vertical-timeline-element">
         <div> <span class="vertical-timeline-element-icon bounce-in"> <i class="badge badge-dot badge-dot-xl badge-warning"> </i> </span>
             <div class="vertical-timeline-element-content bounce-in">
              <p>{actividad} <b class="text-primary">{horactividad}</b></p>
              <p>{reunion}<span class="text-success">{reunionhora}</span></p> <span class="vertical-timeline-element-date">{horaentrada}</span>
          </div>
          </div>
     </div>
   


  ))}
      </div>    
      
      </>
  );
}


