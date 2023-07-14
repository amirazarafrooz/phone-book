import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CONTACTS_API = "http://localhost:3000/contacts";

const ContactForm = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false)
  const [contact, setContact] = useState({ name: "", number: ""  });
  const { name, number } = contact;
  const navigate = useNavigate();


  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || number.trim() === "") {
      alert("All fields are required!");
      return;
    }

    try {
      setIsLoading(true);
      await axios.post(CONTACTS_API, contact);
      setContact({ name: "", number: "" });
      setIsLoading(false);
      navigate("/");

    } catch (error) {
      setError(true)
         setIsLoading(false)
      console.log(error);
    }
  };
 

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


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="phone number"
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
