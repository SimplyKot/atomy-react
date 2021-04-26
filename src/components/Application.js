import { useEffect, useState } from "react";
import useFormValidation from "../hooks/UseForm";
function Application() {
  const [inputDisabled, setInputDisabled] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submit", values, isValid, errors);
    //Тут буде обращение к  API для отпавки письма
  }

  useEffect(() => {
    resetForm();
    setButtonDisabled(true);
  }, []);

  useEffect(() => {
    console.log(values);
    if (values.approval && values.approval && isValid) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [values]);

  return (
    <section className="application" id="application">
      <form className="form" noValidate onSubmit={handleSubmit}>
        <h2 className="form__title">ФОРМА ОБРАТНОЙ СВЯЗИ</h2>
        <label htmlFor="fio" className="form__input-title">
          Введите ФИО полностью:
        </label>
        <input
          id="fio"
          name="fio"
          placeholder="Фамилия Имя Отчество"
          type="text"
          className="form__input"
          value={values.fio || ""}
          onChange={handleChange}
          required
          minLength="2"
          disabled={inputDisabled}
        />
        <span className="form__error" id="fio-input-error">
          {errors.fio}
        </span>
        <label htmlFor="tel" className="form__input-title">
          Сотовый телефон:
        </label>
        <input
          id="tel"
          name="tel"
          placeholder="Введите номер телефона"
          type="tel"
          className="form__input"
          value={values.tel || ""}
          onChange={handleChange}
          required
          pattern="(\+7[-_()\s]+|\+7\s?[(]{0,1}[0-9]{3}[)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2})"
          disabled={inputDisabled}
        />
        <span className="form__error" id="tel-input-error">
          {errors.tel}
        </span>
        <label htmlFor="email" className="form__input-title">
          Электронная почта:
        </label>
        <input
          id="email"
          name="email"
          placeholder="Введите адрес электронной почты"
          type="email"
          className="form__input"
          value={values.email || ""}
          onChange={handleChange}
          required
          disabled={inputDisabled}
        />
        <span className="form__error" id="email-input-error">
          {errors.email}
        </span>
        <p className="form__input-title">Укажите что вас заинтересовало?</p>
        <div className="form__checkbox-interest-container">
          <label htmlFor="products">
            <input
              id="products"
              type="checkbox"
              name="products"
              className="form__invisible-checkbox"
              value={values.products || ""}
              onChange={handleChange}
              disabled={inputDisabled}
            />
            <span className="form__visible-checkbox"></span>
            <span className="form__checkbox-text">Интересует Продукция</span>
          </label>
          <label htmlFor="business">
            <input
              id="business"
              type="checkbox"
              name="business"
              className="form__invisible-checkbox"
              value={values.business || ""}
              onChange={handleChange}
              disabled={inputDisabled}
            />
            <span className="form__visible-checkbox"></span>
            <span className="form__checkbox-text">Интересует Бизнес</span>
          </label>
        </div>
        <label htmlFor="approval" className="form__checkbox-container">
          <input
            id="approval"
            type="checkbox"
            name="approval"
            className="form__invisible-checkbox"
            value={values.approval || ""}
            onChange={handleChange}
            disabled={inputDisabled}
          />
          <span className="form__visible-checkbox"></span>
          <span className="form__checkbox-text">
            Я даю согласие на обработку персональных данных, регистрацию в
            компанию, соглашаюсь с условиями Политики Конфиденциальности.
          </span>
        </label>
        <label htmlFor="confirmation" className="form__checkbox-container">
          <input
            id="confirmation"
            type="checkbox"
            name="confirmation"
            className="form__invisible-checkbox"
            onChange={handleChange}
            disabled={inputDisabled}
          />
          <span className="form__visible-checkbox"></span>
          <span className="form__checkbox-text">
            Я подтверждаю , что у меня нет спонсора в Атоми у которого я
            хотел(а) бы зарегистрироваться
          </span>
        </label>
        <button
          className={`form__submit
          ${inputDisabled || buttonDisabled ? " form__submit_disabled" : ""}`}
          type="submit"
          disabled={buttonDisabled}
        >
          Отправить
        </button>
      </form>
    </section>
  );
}

export default Application;
