import logo from "../image/atomy.logo.l.png";
// import pic1 from "../image/products_img01.jpg";
// import pic2 from "../image/products_img02.jpg";

import { useEffect, useState } from "react";

function Header() {
  const [showBackground, setShowBackground] = useState(true);

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Устанваливаем таймер
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Каждые 5 секунд меняем фон и обнуляем таймер
    if (seconds >= 5) {
      setShowBackground(!showBackground);
      setSeconds(0);
    }
  }, [seconds]);

  return (
    <header className="header" id="header">
      <nav className="menu">
        {/* <h1 className="header__title"> */}
        <a href="#header" target="_top" className="header__logo-container">
          <img className="header__logo" alt="Логотип" src={logo} />
          Дистрибьютoр ATOMY
        </a>
        {/* </h1> */}
        <ul className="menu__links">
          <li>
            <a href="#about" target="_self" className="menu__link">
              Об Атоми
            </a>
          </li>
          <li>
            <a href="#products" target="_self" className="menu__link">
              Продукты
            </a>
          </li>
          <li>
            <a href="#catalog" target="_self" className="menu__link">
              Каталог
            </a>
          </li>
          <li>
            <a href="#business" target="_self" className="menu__link">
              Бизнес
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
      <div
        className={`header__background header__background_image-one
        ${showBackground ? " header__background_main" : ""}`}
      ></div>
      <div
        className={`header__background header__background_image-two
      ${!showBackground ? " header__background_main" : ""}`}
      ></div>
      <div className="header__overlay">
        <h1 className="header__title">Атоми</h1>
        <p className="header__subtitle">Корейская косметическая компания</p>
      </div>
    </header>
  );
}

export default Header;
