import { useNavigate } from "react-router-dom";

const Contact = ({ name, number ,path}) => {

  const navigate = useNavigate();
  const clickContact = () => {
  navigate("/contactdetail/" + path);
  }
  return (
   
    <div onClick={clickContact} className="card">
      <p><img className="user__icon" src="../src/images/user-icon.png"/> {name} </p>
      <p> <img className="user__icon" src="../src/images/phonenumber-icon.png"/> {number}</p>
    </div>
    
  );
};

export default Contact;
