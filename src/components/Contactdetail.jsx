import React from 'react';
import axios from "axios";
import { Button } from "../components/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const CONTACTS_API = "http://localhost:3000/contacts";


export const Contactdetail = () => {

    const [contact, setContact] = useState({});
    const params = useParams();
    const [isLoading, setIsLoading] = useState(false);
  
    const [error, setError] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const getContact = async () => {
          try {
            setIsLoading(true);
            const { data } = await axios.get(`${CONTACTS_API}/${params.id}`);
            setIsLoading(false);
            setContact(data);
          } catch (e) {
            setError(true);
            setIsLoading(false);
            // console.log(error);
          }
        };
        getContact();
      }, []);

      const handleClick = () => {
        navigate("/");
      };



      if (isLoading) {
        return (
          <div className="contact__caption">
            Loading ...
          </div>
        );
      }
    
      if (error) {
        return (
          <div className="contact__caption">
            <div>There is an error in loading API...</div>
            <div>Please refresh the page</div>
          </div>
        );
      }

    return (
        <div>
        <div className="contactdetail__body">
      <div className="contact__detail"> <img className="icon" src="../src/images/newuser-icon.png"></img> <p> {contact.name}</p> </div>
      <div className="contact__detail"><img className="icon" src="../src/images/newphone-icon.png"></img> <p>{contact.number}</p></div>
      </div>
      <div className="contactdetail__btn">
      <Button btnText='Back to Contacts list' clickHandler={handleClick}> </Button>
      </div>
      </div>
    
    );
};

