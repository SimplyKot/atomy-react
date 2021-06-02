import { useEffect, useState } from "react";
import useFormValidation from "../hooks/UseForm";
function Application(props) {
  const { applicationSubmit } = props;
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
    // console.log("Submit", values, isValid, errors);
    //Тут буде обращение к  API для отпавки письма
    setInputDisabled(true);
    //TODO: По хорошему надо переделать на темплейт
    var msg = "<h3>Сообщение пришло с формы обратной связи</h3><ul>";
    msg += `<li>Пользователь: ${values.fio || "не указан"}</li>`;
    msg += `<li>Телефон: ${values.tel || "не указан"}</li>`;
    msg += `<li>Дата рожения: ${values.data || "не указан"}</li>`;
    msg += `<li>Почта: ${values.email || "не указан"}</li>`;
    msg += `<li>Страна: ${values.country || "не указан"}</li>`;
    msg += `<li>Индекс: ${values.index || "не указан"}</li>`;
    msg += `<li>Почтовый адрес: ${values.address || "не указан"}</li>`;
    msg += `${values.products ? "<li>Подукты</li>" : ""}`;
    msg += ` ${values.business_interest ? "<li>Бизнес</li>" : ""}`;
    msg += "</ul>";
    // popupSubmit({ data: msg })

    applicationSubmit({ data: msg })
      .then((res) => {
        //Тут хорошо бы добавить попап о резульате
        // console.log(res);
      })
      .finally(() => {
        setInputDisabled(false);
        resetForm();
      });
  }

  useEffect(() => {
    resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // console.log(values);
    if (
      values.approval &&
      values.confirmation &&
      isValid &&
      (values.products || values.business)
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [values, isValid]);

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
        <label htmlFor="date" className="form__input-title">
          Дата рождения:
        </label>
        <input
          id="date"
          name="date"
          placeholder="Дата рождения"
          type="date"
          className="form__input"
          onChange={handleChange}
          disabled={inputDisabled}
        />
        <span className="form__error" id="date-input-error">
          {errors.date}
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

        <label htmlFor="country" className="form__input-title">
          <span className="form__input-required">*</span>Ваша страна:
        </label>
        <input
          id="country"
          name="country"
          placeholder="Введите вашу страну"
          type="text"
          className="form__input"
          onChange={handleChange}
          required
          disabled={inputDisabled}
        />
        <span className="form__error" id="country-input-error">
          {errors.country}
        </span>
        <label htmlFor="index" className="form__input-title">
          Ваш индекс:
        </label>
        <input
          id="index"
          name="index"
          placeholder="Введите ваш индекс"
          type="text"
          className="form__input"
          onChange={handleChange}
          disabled={inputDisabled}
        />
        <span className="form__error" id="index-input-error">
          {errors.index}
        </span>

        <label htmlFor="address" className="form__input-title">
          <span className="form__input-required">*</span>Ваш почтовый адрес:
        </label>
        <input
          id="address"
          name="address"
          placeholder="Введите ваш почтовый адрес"
          type="text"
          className="form__input"
          onChange={handleChange}
          required
          disabled={inputDisabled}
        />

        <span className="form__error" id="address-input-error">
          {errors.address}
        </span>

        <p className="form__input-title">Укажите что вас заинтересовало?</p>
        <div className="form__checkbox-interest-container">
          <label htmlFor="products_interest">
            <input
              id="products_interest"
              type="checkbox"
              name="products"
              className="form__invisible-checkbox"
              value={values.products_interest || ""}
              onChange={handleChange}
              disabled={inputDisabled}
            />
            <span className="form__visible-checkbox"></span>
            <span className="form__checkbox-text">Интересует Продукция</span>
          </label>
          <label htmlFor="business_interest">
            <input
              id="business_interest"
              type="checkbox"
              name="business_interest"
              className="form__invisible-checkbox"
              value={values.business_interest || ""}
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
            Я подтверждаю, что у меня нет спонсора в Атоми у которого я хотел(а)
            бы зарегистрироваться
          </span>
        </label>
        <p className="form__input-required-text">
          <span className="form__input-required">*</span>Поля, обязательные для
          заполнения
        </p>
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
