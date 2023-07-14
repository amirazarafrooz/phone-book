import { useNavigate } from "react-router-dom";
import ContactList from "../components/ContactList";
import "../css/home.css"
import { Button } from "../components/Button";

const Home = () => {
  const navigate = useNavigate();


  const handleClick = () => {


    navigate("/new-contact");
  };


  
  return (
    <div className="home__container">
      <div className="home__list">
        
      <div className="home__header">
        <div className="home__title">
        <h1>Contact List</h1>
        </div>
      <div className="home__add__button">
        <Button btnText='➕' clickHandler={handleClick}> </Button>
        </div>
      </div>
      <div className="home__list__item">
        <ContactList />
      </div>
      </div>
    </div>
  );
};

export default Home;
