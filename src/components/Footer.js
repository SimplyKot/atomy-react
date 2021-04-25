function Foooter() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__social-container">
        <div className="footer__social-networks-container">
          <img
            src="<%=require('./image/networks.png')%>"
            alt="Картинка, обозначающая социальные сети"
            className="footer__image-networks"
          />
          <h3 className="footer__title">Свяжитесь с нами в соц. сетях</h3>
          <div className="footer__messengers-container">
            <a
              href="https://api.whatsapp.com/send?phone=79259375334"
              target="_blank"
              className="footer__social-link"
              rel="noreferrer"
            >
              <img
                src="<%=require('./image/WhatsApp.svg')%>"
                alt="Иконка вотсаппа"
                className="footer__social-icon"
              />
              WhatsApp
            </a>
            <a
              href="https://t.me/Tanya_Meshkova"
              target="_blank"
              className="footer__social-link"
              rel="noreferrer"
            >
              <img
                src="<%=require('./image/Telegram.svg')%>"
                alt="Иконка телеграмма"
                className="footer__social-icon"
              />
              Telegram
            </a>
            <a
              href="https://vk.com/club204115429"
              target="_blank"
              className="footer__social-link"
              rel="noreferrer"
            >
              <img
                src="<%=require('./image/VKontakte.svg')%>"
                alt="Иконка ВКонтакте"
                className="footer__social-icon"
              />
              Vkontakte
            </a>
          </div>
          <p className="footer__annotation">
            Подписывайтесь на нас в мессенджерах и будьте в курсе всех новинок
            компании Атоми!
          </p>
        </div>
        <div className="footer__mail-container">
          <img
            src="<%=require('./image/postman.png')%>"
            alt="Картинка - бегущий почтальон"
            className="footer__image-mail"
          />
          <h3 className="footer__title">Напишите нам</h3>
          <a href="#" className="footer__mail-link">
            terta1@mail.ru
          </a>
          <p className="footer__annotation">
            Задавайте интересующие Вас вопросы по электронной почте.
          </p>
        </div>
      </div>
      <img
        src="<%=require('./image/2730324.svg')%>"
        alt="Орнамент"
        className="footer__ornament"
      />
      <p className="footer__attention">
        Сайт носит информационно-справочный характер и ни при каких условиях не
        является публичной офертой. Полное или частичное копирование материалов
        данного сайта запрещены.
      </p>
      <p className="footer__copyright">&copy; 2021. САЙТ ПАРТНЕРА АТОМИ</p>
    </footer>
  );
}
