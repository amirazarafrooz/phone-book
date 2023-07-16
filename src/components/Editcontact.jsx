import React from 'react';
import ContactForm from '../components/ContactForm';
import { Button } from './Button';
import { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from "axios";
const CONTACTS_API = "http://localhost:3000/contacts";

export const Editcontact = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)
    const [contact, setContact] = useState({ name: "", number: ""  });
    const [isSaved, setIsSaved] = useState()
    const { name, number } = contact;
    const params = useParams();

  
    
  
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
          }
        };
        getContact();
      }, []);












    const handleChange = (e) => {
      setContact({ ...contact, [e.target.name]: e.target.value });
   
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (name.trim() === "" || number.trim() === "") {
        // alert("All fields are required!");
        setIsSaved("All fields are required!")
        return;
      }
  
      try {
        setIsLoading(true);
        setIsSaved("false");
        const EditContact={...contact,name,number}
        await axios.put(`${CONTACTS_API}/${params.id}`, EditContact);
        setIsLoading(false);
        setIsSaved("modification saved");
        
        
      } catch (error) {
        setError(true)
        setIsLoading(false)
        // console.log(error);
      }
    };
   
  
    if (isLoading) {
      return (
        <div className='contact__caption'>
          Loading ...
        </div>
      )
    }
  
    if(error) {
      return (<>
        <div className='contact__caption'>
          There is an error in loading API...
        </div>
          <div>Please refresh the page</div>
          </>
      )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
          <div className='newcontact__input'>
          <img className="icon" src="../src/images/newuser-icon.png"></img>
            <input
              placeholder="name"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className='newcontact__input'>
          <img className="icon" src="../src/images/newphone-icon.png"></img>
            <input
              placeholder="phone number"
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className='label__modify'>
            <label >{isSaved}</label>
            </div>
            <div className="newcontact__btn">
            <Button btnText='edit' > </Button>
            </div>
          </div>
        </form>
        
        </div>
    );
};

