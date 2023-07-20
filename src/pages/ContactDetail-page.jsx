import React from "react";






import { Contactdetail } from "../components/Contactdetail";

export const ContactDetail = () => {
  

  return (

    
    <div className="container">
      <div className="contactdetail__container">
        <div className="contactdetail__header">
      <h1> Contact info </h1>
      </div>
      <div className="contactdetail__body">
    <Contactdetail/>
    </div>
      </div>
    </div>

  );
};
