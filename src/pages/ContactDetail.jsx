import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const CONTACTS_API = "http://localhost:3000/contacts";
import axios from "axios";
import { Button } from "../components/Button";

export const ContactDetail = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [contact, setContact] = useState({});
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
      <div>
        <h1> userdeatail {[params.id]} </h1>
        Loading ...
        <button onClick={handleClick}>Back to Contacts list</button>
      </div>
    );
  }

  if (error) {
    return (
      <>
        <div>There is an error in loading API...</div>
        <div>Please refresh the page</div>
      </>
    );
  }

  return (
    <div>
      <h1> userdeatail {[params.id]} </h1>
      <div>name: {contact.name}</div>
      <div>number: {contact.number}</div>
      <Button btnText='Back to Contacts list' clickHandler={handleClick}> </Button>
    </div>
  );
};
