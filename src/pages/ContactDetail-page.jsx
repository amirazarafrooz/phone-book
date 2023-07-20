import React from "react";
import {Img} from 'react-image'
import backicon from "../images/back-icon.png"





import { Contactdetail } from "../components/Contactdetail";

export const ContactDetail = () => {
  

  return (

    
    <div className="container">
      <Img src={backicon}></Img>
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
