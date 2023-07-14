import "../css/contact.css"
import { useNavigate } from "react-router-dom";

const Contact = ({ name, number ,path}) => {

  const navigate = useNavigate();
  const clickContact = () => {
  navigate("/contactdetail/" + path);
  }
  return (
   
    <div onClick={clickContact} className="card">
      <p>Name: {name} </p>
      <p>Phone Number: {number}</p>
    </div>
    
  );
};

export default Contact;
