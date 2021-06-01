function Popup() {
  return (
    <div className="popup">
      <div className="popup__container">
        <button
          type="button"
          aria-label="Выход"
          className="popup__exit"
        ></button>
        <form className="popup__form" novalidate>
          <h2 className="popup__title">ФОРМА ОБРАТНОЙ СВЯЗИ</h2>
          <label for="popup-fio" className="popup__input-title">
            Введите ФИО полностью:
          </label>
          <input
            id="popup-fio"
            name="popup-fio"
            placeholder="Фамилия Имя Отчество"
            type="text"
            className="popup__input"
          />
          <span className="popup__error" id="popup-fio-input-error"></span>
          <label for="popup-date" className="popup__input-title">
            Дата рождения:
          </label>
          <input
            id="popup-date"
            name="popup-date"
            placeholder="Дата рождения"
            type="date"
            className="popup__input"
          />
          <span className="popup__error" id="popup-date-input-error"></span>
          <label for="popup-tel" className="popup__input-title">
            Сотовый телефон:
          </label>
          <input
            id="popup-tel"
            name="popup-tel"
            placeholder="Введите номер телефона"
            type="tel"
            className="popup__input"
          />
          <span className="popup__error" id="popup-tel-input-error"></span>
          <label for="popup-email" className="popup__input-title">
            Электронная почта:
          </label>
          <input
            id="popup-email"
            name="popup-email"
            placeholder="Введите адрес электронной почты"
            type="email"
            className="popup__input"
          />
          <span className="popup__error" id="popup-email-input-error"></span>
          <label for="popup-address" className="popup__input-title">
            Ваш город:
          </label>
          <input
            id="popup-address"
            name="popup-address"
            placeholder="Введите ваш город"
            type="text"
            className="popup__input"
          />
          <span className="popup__error" id="popup-address-input-error"></span>
          <p className="popup__input-title">Укажите что вас заинтересовало?</p>
          <div className="popup__checkbox-interest-container">
            <label for="popup-products-interest">
              <input
                id="popup-products-interest"
                type="checkbox"
                name="popup-interest"
                value="products"
                className="popup__invisible-checkbox"
              />
              <span className="popup__visible-checkbox"></span>
              <span className="popup__checkbox-text">Интересует Продукция</span>
            </label>
            <label for="popup-business-interest">
              <input
                id="popup-business-interest"
                type="checkbox"
                name="popup-interest"
                value="business"
                className="popup__invisible-checkbox"
              />
              <span className="popup__visible-checkbox"></span>
              <span className="popup__checkbox-text">Интересует Бизнес</span>
            </label>
          </div>
          <label for="popup-approval" className="popup__checkbox-container">
            <input
              id="popup-approval"
              type="checkbox"
              name="popup-approval"
              value="yes"
              className="popup__invisible-checkbox"
            />
            <span className="popup__visible-checkbox"></span>
            <span className="popup__checkbox-text">
              Я даю согласие на обработку персональных данных, регистрацию в
              компанию, соглашаюсь с условиями Политики Конфиденциальности.
            </span>
          </label>
          <label for="popup-confirmation" className="popup__checkbox-container">
            <input
              id="popup-confirmation"
              type="checkbox"
              name="popup-confirmation"
              value="yes"
              className="popup__invisible-checkbox"
            />
            <span className="popup__visible-checkbox"></span>
            <span className="popup__checkbox-text">
              Я подтверждаю , что у меня нет спонсора в Атоми у которого я
              хотел(а) бы зарегистрироваться
            </span>
          </label>
          <button className="popup__submit" type="submit">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
