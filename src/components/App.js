import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Popup from "./Popup";
import api from "../utils/Api";
import Confirmation from "./Confirmation";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);

  function togglePopup() {
    setIsPopupOpen(!isPopupOpen);
  }

  function toggleConfirmPopup() {
    setIsConfirmPopupOpen(!isConfirmPopupOpen);
  }

  function sendData(data) {
    return api.sendData(data).finally(() => {
      setIsConfirmPopupOpen(true);
    });
  }

  return (
    <div className="page">
      <Header />
      <Main togglePopup={togglePopup} applicationSubmit={sendData} />
      <Footer />
      <Popup
        isOpen={isPopupOpen}
        togglePopup={togglePopup}
        popupSubmit={sendData}
      />
      <Confirmation
        isOpen={isConfirmPopupOpen}
        togglePopup={toggleConfirmPopup}
      />
    </div>
  );
}

export default App;
