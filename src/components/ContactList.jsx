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
      <div>
        Loading ...
      </div>
    )
  }

  if(error) {
    return (<>
      <div>
        There is an error in loading API...
      </div>
        <div>Please refresh the page</div>
        </>
    )
  }

  if (contacts.length===0) {
    return (
      <div>
        No user
      </div>
    )
  }




  return (
    <>
    <div>
      {contacts.map(({ id, name, number }) => (
        <div> 
        <Contact path={id} key={id} name={name} number={number}>  </Contact>
        

        <Button btnText='❌' clickHandler={()=>{deleteHandler(id)}}> </Button>
        <Button btnText='✏️' clickHandler={()=>{editHandler(id)}}> </Button>
        
       
        </div>
        
        ))}
    </div>
    </>
  );
};

export default ContactList;
