import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Popup from "./Popup";
import api from "../utils/Api";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function togglePopup() {
    setIsPopupOpen(!isPopupOpen);
    console.log("toggelPopup in App =>0, isPopupOpen");
  }

  function sendData(data) {
    console.log("Данные для отправки:", data);
    api.sendData(data).then((res) => {
      console.log(res);
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
    </div>
  );
}

export default App;
