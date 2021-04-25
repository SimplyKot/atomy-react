import logo from "../images/atomy.logo.l.png";
import pic1 from "../images/products_img01.jpg";
import pic2 from "../images/products_img02.jpg";

function Header() {
  return (
    <header className="header" id="header">
      <nav className="menu">
        <h1 className="header__title">
          <a href="#header" target="_top" className="header__logo-container">
            <img className="header__logo" alt="Логотип" src={logo} />
            Дистрибьютoр ATOMY
          </a>
        </h1>
        <ul className="menu__links">
          <li>
            <a href="#" target="_self" className="menu__link">
              Об Атоми
            </a>
          </li>
          <li>
            <a href="#" target="_self" className="menu__link">
              Продукты
            </a>
          </li>
          <li>
            <a href="#" target="_self" className="menu__link">
              Каталог
            </a>
          </li>
          <li>
            <a href="#" target="_self" className="menu__link">
              Бизнес с Атоми
            </a>
          </li>
          <li>
            <a href="#application" target="_self" className="menu__link">
              Регистрация
            </a>
          </li>
          <li>
            <a href="#footer" target="_self" className="menu__link">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__background header__background_image-one header__background_main">
        <img
          src={pic1}
          alt="Сменяющаяся картинка - косметика Атоми."
          className="header__background-image"
        />
      </div>
      <div className="header__background header__background_image-two">
        <img
          src={pic2}
          alt="Сменяющаяся картинка - косметика Атоми."
          className="header__background-image"
        />
      </div>
      <div className="header__overlay"></div>
    </header>
  );
}

export default Header;
