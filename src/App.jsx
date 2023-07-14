import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";
import { ContactDetail } from "./pages/ContactDetail";
import EditContact from "./pages/EditContact";
import "../src/css/app.css"


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
