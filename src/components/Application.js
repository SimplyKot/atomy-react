import App from "./App";

function Application() {
  return (
    <section className="application" id="application">
      <form className="form" novalidate>
        <h2 className="form__title">ФОРМА ОБРАТНОЙ СВЯЗИ</h2>
        <label for="fio" className="form__input-title">
          Введите ФИО полностью:
        </label>
        <input
          id="fio"
          name="fio"
          placeholder="Фамилия Имя Отчество"
          type="text"
          className="form__input"
        />
        <span className="form__error" id="fio-input-error"></span>
        <label for="tel" className="form__input-title">
          Сотовый телефон:
        </label>
        <input
          id="tel"
          name="tel"
          placeholder="Введите номер телефона"
          type="tel"
          className="form__input"
        />
        <span className="form__error" id="tel-input-error"></span>
        <label for="email" className="form__input-title">
          Электронная почта:
        </label>
        <input
          id="email"
          name="email"
          placeholder="Введите адрес электронной почты"
          type="email"
          className="form__input"
        />
        <span className="form__error" id="email-input-error"></span>
        <p className="form__input-title">Укажите что вас заинтересовало?</p>
        <div className="form__checkbox-interest-container">
          <label for="products">
            <input
              id="products"
              type="checkbox"
              name="interest"
              value="products"
              className="form__invisible-checkbox"
            />
            <span className="form__visible-checkbox"></span>
            <span className="form__checkbox-text">Интересует Продукция</span>
          </label>
          <label for="business">
            <input
              id="business"
              type="checkbox"
              name="interest"
              value="business"
              className="form__invisible-checkbox"
            />
            <span className="form__visible-checkbox"></span>
            <span className="form__checkbox-text">Интересует Бизнес</span>
          </label>
        </div>
        <label for="approval" className="form__checkbox-container">
          <input
            id="approval"
            type="checkbox"
            name="approval"
            value="yes"
            className="form__invisible-checkbox"
          />
          <span className="form__visible-checkbox"></span>
          <span className="form__checkbox-text">
            Я даю согласие на обработку персональных данных, регистрацию в
            компанию, соглашаюсь с условиями Политики Конфиденциальности.
          </span>
        </label>
        <label for="confirmation" className="form__checkbox-container">
          <input
            id="confirmation"
            type="checkbox"
            name="confirmation"
            value="yes"
            className="form__invisible-checkbox"
          />
          <span className="form__visible-checkbox"></span>
          <span className="form__checkbox-text">
            Я подтверждаю , что у меня нет спонсора в Атоми у которого я
            хотел(а) бы зарегистрироваться
          </span>
        </label>
        <button className="form__submit" type="submit">
          Отправить
        </button>
      </form>
    </section>
  );
}

export default Application;
