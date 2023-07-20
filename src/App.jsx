import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";
import { ContactDetail } from "./pages/ContactDetail-page";
import EditContact from "./pages/EditContact-page";
import "../src/css/app.css";
import "../src/css/button.css";
import "../src/css/home.css";
import "../src/css/contact.css";
import "../src/css/contactlist.css";
import "../src/css/newcontact.css";
import "../src/css/contactform.css";
import "../src/css/contactdetail.css";
import "../src/css/contactdetail-comp.css";
import "../src/css/editcontact.css";
import "../src/css/editcontact-comp.css";













function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-contact" element={<NewContact />} />
        <Route path="/contactdetail/:id" element={<ContactDetail />} />
        <Route path="/editcontact/:id" element={<EditContact />} />

      </Routes>
    </>
  );
}

export default App;
