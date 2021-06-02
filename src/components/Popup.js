import { useState, useEffect } from "react";
import useFormValidation from "../hooks/UseForm";

function Popup(props) {
  const { popupSubmit } = props;
  const [inputDisabled, setInputDisabled] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormValidation();

  function closePopup(e) {
    e.preventDefault();
    //console.log("close popup");
    props.togglePopup();
  }

  function submitPopup(e) {
    e.preventDefault();
    setInputDisabled(true);
    //TODO: По хорошему надо переделать на темплейт
    var msg = "<h3>Сообщение пришло с формы (Хочу каталог)</h3><ul>";
    msg += `<li>Пользователь:${values.popup_fio}</li>`;
    msg += `<li>Телефон:${values.popup_tel}</li>`;
    msg += `<li>Почта:${values.popup_email}</li>`;
    msg += `${values.popup_products_interest ? "<li>Подукты</li>" : ""}`;
    msg += ` ${values.popup_business_interest ? "<li>Бизнес</li>" : ""}`;
    msg += "</ul>";
    popupSubmit({ data: msg })
      .then((res) => {
        //Тут хорошо бы добавить попап о резульате
        console.log(res);
      })
      .finally(() => {
        setInputDisabled(false);
      });
    props.togglePopup();
  }

  useEffect(() => {
    resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(isValid);
    console.log(values.popup_approval);
    console.log(values.popup_confirmation);
    console.log(values.popup_business_interest);
    console.log(values.popup_products_interest);

    if (
      values.popup_approval &&
      values.popup_confirmation &&
      isValid &&
      (values.popup_business_interest || values.popup_products_interest)
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [values, isValid]);

  return (
    <div className={`popup${props.isOpen ? " popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          aria-label="Выход"
          className="popup__exit"
          onClick={closePopup}
        ></button>
        <form className="popup__form" noValidate>
          <h2 className="popup__title">ФОРМА ОБРАТНОЙ СВЯЗИ</h2>
          <label htmlFor="popup_fio" className="popup__input-title">
            Введите ФИО полностью:
          </label>
          <input
            id="popup_fio"
            name="popup_fio"
            placeholder="Фамилия Имя Отчество"
            type="text"
            className="popup__input"
            value={values.popup_fio || ""}
            onChange={handleChange}
            required
            minLength="2"
            disabled={inputDisabled}
          />
          <span className="popup__error" id="popup-fio-input-error">
            {errors.popup_fio}
          </span>
          <label htmlFor="popup_tel" className="popup__input-title">
            Сотовый телефон:
          </label>
          <input
            id="popup_tel"
            name="popup_tel"
            placeholder="Введите номер телефона"
            type="tel"
            className="popup__input"
            value={values.popup_tel || ""}
            onChange={handleChange}
            required
            pattern="(\+7[-_()\s]+|\+7\s?[(]{0,1}[0-9]{3}[)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2})"
            disabled={inputDisabled}
          />
          <span className="popup__error" id="popup-tel-input-error">
            {errors.popup_tel}
          </span>
          <label htmlFor="popup_email" className="popup__input-title">
            Электронная почта:
          </label>
          <input
            id="popup_email"
            name="popup_email"
            placeholder="Введите адрес электронной почты"
            type="email"
            className="popup__input"
            value={values.popup_email || ""}
            onChange={handleChange}
            required
            disabled={inputDisabled}
          />
          <span className="popup__error" id="popup-email-input-error">
            {errors.popup_email}
          </span>
          <p className="popup__input-title">Укажите что вас заинтересовало?</p>
          <div className="popup__checkbox-interest-container">
            <label htmlFor="popup_products_interest">
              <input
                id="popup_products_interest"
                type="checkbox"
                name="popup_products_interest"
                className="popup__invisible-checkbox"
                value={values.popup_products_interest || ""}
                onChange={handleChange}
                disabled={inputDisabled}
              />
              <span className="popup__visible-checkbox"></span>
              <span className="popup__checkbox-text">Интересует Продукция</span>
            </label>
            <label htmlFor="popup_business_interest">
              <input
                id="popup_business_interest"
                type="checkbox"
                name="popup_business_interest"
                className="popup__invisible-checkbox"
                value={values.popup_business_interest || ""}
                onChange={handleChange}
                disabled={inputDisabled}
              />
              <span className="popup__visible-checkbox"></span>
              <span className="popup__checkbox-text">Интересует Бизнес</span>
            </label>
          </div>
          <label htmlFor="popup_approval" className="popup__checkbox-container">
            <input
              id="popup_approval"
              type="checkbox"
              name="popup_approval"
              className="popup__invisible-checkbox"
              value={values.popup_approval || ""}
              onChange={handleChange}
              disabled={inputDisabled}
            />
            <span className="popup__visible-checkbox"></span>
            <span className="popup__checkbox-text">
              Я даю согласие на обработку персональных данных, регистрацию в
              компанию, соглашаюсь с условиями Политики Конфиденциальности.
            </span>
          </label>
          <label
            htmlFor="popup_confirmation"
            className="popup__checkbox-container"
          >
            <input
              id="popup_confirmation"
              type="checkbox"
              name="popup_confirmation"
              className="popup__invisible-checkbox"
              value={values.popup_confirmation || ""}
              onChange={handleChange}
              disabled={inputDisabled}
            />
            <span className="popup__visible-checkbox"></span>
            <span className="popup__checkbox-text">
              Я подтверждаю , что у меня нет спонсора в Атоми у которого я
              хотел(а) бы зарегистрироваться
            </span>
          </label>
          <button
            className={`popup__submit
          ${inputDisabled || buttonDisabled ? " popup__submit_disabled" : ""}`}
            type="submit"
            onClick={submitPopup}
            disabled={buttonDisabled}
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
