function Catalog(props) {
  return (
    <section className="catalog" id="catalog">
      <h2 className="catalog__title">ДЛЯ ЗАРЕГИСТРИРОВАННЫХ</h2>
      <ul className="catalog__list">
        <li className="catalog__list-element">
          <span
            className="fas fa-carrot catalog__icon"
            aria-hidden="true"
          ></span>
          <p className="catalog__text">Скидка на всю продукцию 15% - 20%</p>
        </li>
        <li className="catalog__list-element">
          <span
            className="fab fa-angellist catalog__icon"
            aria-hidden="true"
          ></span>
          <p className="catalog__text">
            Оригинальная продукция только на официальном сайте Atomy
            остерегайтесь подделок!
          </p>
        </li>
        <li className="catalog__list-element">
          <span
            className="fas fa-cheese catalog__icon"
            aria-hidden="true"
          ></span>
          <p className="catalog__text">Ассортимент продукции больше</p>
        </li>
        <li className="catalog__list-element">
          <span className="fas fa-atom catalog__icon" aria-hidden="true"></span>
          <p className="catalog__text">Регистрация в Атоми БЕСПЛАТНО!</p>
        </li>
        <li className="catalog__list-element">
          <span
            className="fas fa-briefcase catalog__icon"
            aria-hidden="true"
          ></span>
          <p className="catalog__text">Возможность получать доход</p>
        </li>
      </ul>
      <button className="catalog__button" onClick={props.togglePopup}>
        СКАЧАТЬ КАТАЛОГ
      </button>
    </section>
  );
}
export default Catalog;
