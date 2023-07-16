import ContactForm from "../components/ContactForm";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";


const NewContact = () => {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/");
  };


  return (
    <div className="container">
      <div className="newcontact__container">
      <div className="newcontact__header">
      <h1>New Contact</h1>
      <div className="newcontact__btn2">
        <Button  btnText={<img  src='../src/images/back-icon.png'/>} clickHandler={handleClick}>  </Button>
        </div>
      </div>
       <div className="newcontact__body">
      <ContactForm />
      </div>
    </div>
    </div>
  );
};

export default NewContact;
