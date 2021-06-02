function Confirmation(props) {
  function closePopup(e) {
    e.preventDefault();
    //console.log("close popup");
    props.togglePopup();
  }
  return (
    <div className={`popup${props.isOpen ? " popup_opened" : ""}`}>
      {/* <div className={`popup popup_opened`}> */}
      <div className="popup__container">
        <button
          type="button"
          aria-label="Выход"
          className="popup__exit"
          onClick={closePopup}
        ></button>
        <h2 className="popup__title">Запрос успешно отправлен</h2>
      </div>
    </div>
  );
}
export default Confirmation;
