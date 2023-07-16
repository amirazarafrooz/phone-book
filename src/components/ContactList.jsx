import { useState, useEffect } from "react";
import axios from "axios";
import Contact from "./Contact";
import { useNavigate } from 'react-router-dom';
import { Button } from "./Button";
const CONTACTS_API = "http://localhost:3000/contacts";

const ContactList = () => {
  
  
  const [isLoading, setIsLoading] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(false)
  const navigate = useNavigate();
  
  
  
  useEffect(() => {
    
    const getContacts = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(CONTACTS_API);
        setIsLoading(false);
        setContacts(data);
      } catch (e) {
        setError(true)
        setIsLoading(false)
        console.log(error);
      }
    };
    getContacts();
  }, []);
  
  
  
    const editHandler = (id) => {
        navigate(`/editcontact/${id}`);
      };
  
  const deleteHandler = (id) => {
    setIsLoading(true);
    axios.delete(`${CONTACTS_API}/${id}`)
    .then(response => {
            setContacts(contacts.filter((t) => t.id !== id));
            setIsLoading(false);
          })
        .catch(error => {
          setError(true)
          setIsLoading(false)
        })
}

  if (isLoading) {
    return (
      <div className="contact__caption">
        Loading ...
      </div>
    )
  }

  if(error) {
    return (<>
      <div className="contact__caption">
        There is an error in loading API...
      </div>
        <div>Please refresh the page</div>
        </>
    )
  }

  if (contacts.length===0) {
    return (
      <div className="contact__caption"> 
        No user
      </div>
    )
  }




  return (
    <>
    <div >
      {contacts.map(({ id, name, number }) => (
        <div className="contact__container"> 
        <div className="contact__bookmark"></div>
        <div>
        <Contact path={id} key={id} name={name} number={number}>  </Contact>
        </div>
        <div className="contact__action__btn">
        <Button btnText={<img className="icon" src="../src/images/edit-icon.png"></img>} cssClass="icon__btn" clickHandler={()=>{editHandler(id)}}></Button>

        <Button btnText={<img className="icon" src="../src/images/bin-icon.png"></img>} cssClass="icon__btn" clickHandler={()=>{deleteHandler(id)}}>  </Button>
        </div>
       
        </div>
        
        ))}
    </div>
    </>
  );
};

export default ContactList;
