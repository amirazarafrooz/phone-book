import React from 'react';
import { Editcontact } from '../components/Editcontact';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';


const EditContact = () => {

  const navigate = useNavigate();

    
  const handleClick = () => {
    navigate("/");
  };
  
    return (
      <div className="container">
      <div className="editcontact__container">
        <div className="editcontact__header">
      <h1> Contact info </h1>
      <div className="editcontactback__btn">
        <Button  btnText={<img  src='../src/images/back-icon.png'/>} clickHandler={handleClick}>  </Button>
        </div>
      </div>
      <div className='editcontact__body'>
        <Editcontact/>
        </div>
      </div>
      </div>
    );
  };
  
 
  

export default EditContact;