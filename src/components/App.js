import Header from "./Header";

function App() {
  return <Header />;
}

export default App;

{
  /* <main className="content">
            <section className="products">
              <h2 className="products__title">ПРОДУКЦИЯ АТОМИ</h2>
              <p className="products__subtitle">Перспективы развития у компании Atomy на российском и других рынках планеты огромные. Продукция премиум класса по лучшей цене от производителя различных товаров подходит каждой семье. Каждый потребитель и партнер легко подберет корейскую
                        продукцию по своим желаниям и потребностям. Ведь компания Атоми несет массовость и престиж!</p>
              <ul className="products__list">
                <li className="products__list-element">
                  <img src="<%=require('./image/pro-kompleksy-dlya-zdorovya-i-krassoty.jpg')%>" alt="." className="products__list-image">
                    <h3 className="products__list-title">ЗДОРОВЬЕ И КРАСОТА</h3>
                    <p className="products__list-description">Первоклассные комплексы для здоровья и красоты человеческого тела. Продукты для похудения и общеукрепляющие средства.</p>
                        </li>
                  <li className="products__list-element">
                    <img src="<%=require('./image/pro-uhod-za-licom-i-telom.jpg')%>" alt="." className="products__list-image">
                      <h3 className="products__list-title">УХОД ЗА ЛИЦОМ И ТЕЛОМ</h3>
                      <p className="products__list-description">Отличные крема и комплексы по уходу за кожей лица и всего тела. Декоративная косметика и уход за волосами.</p>
                        </li>
                    <li className="products__list-element">
                      <img src="<%=require('./image/pro-dlya-doma-i-zhizni.jpg')%>" alt="." className="products__list-image">
                        <h3 className="products__list-title">ДЛЯ ДОМА И ЖИЗНИ</h3>
                        <p className="products__list-description">В данную категорию товаров входят гигиенические средства, товары для уборки и зубная гигиена.</p>
                        </li>
                      <li className="products__list-element">
                        <img src="<%=require('./image/pro-produkty-pitaniya.jpg')%>" alt="." className="products__list-image">
                          <h3 className="products__list-title">ПРОДУКТЫ ПИТАНИЯ</h3>
                          <p className="products__list-description">Только полезные для здоровья продукты. Соль и органический сахар, чай и кофе из арабики, сок, джем и другие продукты.</p>
                        </li>
                        <li className="products__list-element">
                          <img src="<%=require('./image/pro-posuda-dlya-kuhni.jpg')%>" alt="." className="products__list-image">
                            <h3 className="products__list-title">ПОСУДА ДЛЯ КУХНИ</h3>
                            <p className="products__list-description">Отличный набор сковородок и кастрюл с отличным качеством металла. Приготовление пищи станет приятным и полезным.</p>
                        </li>
                          <li className="products__list-element">
                            <img src="<%=require('./image/pro-odezhda-i-obuv.jpg')%>" alt="." className="products__list-image">
                              <h3 className="products__list-title">ОДЕЖДА И ОБУВЬ</h3>
                              <p className="products__list-description">Качественная одежда и обувь премиум класса. В ассортименте трусы, майки, футболки и качественные колготки.</p>
                        </li>
                            <li className="products__list-element">
                              <img src="<%=require('./image/pro-postelnye-prednadlezhnosti.jpg')%>" alt="." className="products__list-image">
                                <h3 className="products__list-title">ПОСТЕЛЬНЫЕ ПРИНАДЛЕЖНОСТИ</h3>
                                <p className="products__list-description">Превосходного качества постельные наборы и ортопедические подушки. Прекрасный вариант для ценящих качество и уют в доме.</p>
                        </li>
                              <li className="products__list-element">
                                <img src="<%=require('./image/pro-elektronika.jpg')%>" alt="." className="products__list-image">
                                  <h3 className="products__list-title">ЭЛЕКТРОНИКА</h3>
                                  <p className="products__list-description">Очиститель воздуха, фен для сушки волос и другие приспособления для ухода за волосами.</p>
                        </li>
                                <li className="products__list-element">
                                  <img src="<%=require('./image/pro-prochee.jpg')%>" alt="." className="products__list-image">
                                    <h3 className="products__list-title">ПРОЧЕЕ</h3>
                                    <p className="products__list-description">Подарочные пакеты, сумки для покупок, каталоги и другие полезные материалы для сотрудничества с компанией.</p>
                        </li>
                    </ul>
                </section>
                              <section className="catalog">
                                <button className="catalog__button">ХОЧУ КАТАЛОГ</button>
                              </section>
                              <section className="application" id="application">
                                <form className="form" novalidate>
                                  <h2 className="form__title">ФОРМА ОБРАТНОЙ СВЯЗИ</h2>
                                  <label for="fio" className="form__input-title">Введите ФИО полностью:</label>
                                  <input id="fio" name="fio" placeholder="Фамилия Имя Отчество" type="text" className="form__input">
                                    <span className="form__error" id="fio-input-error"></span>
                                    <label for="tel" className="form__input-title">Сотовый телефон:</label>
                                    <input id="tel" name="tel" placeholder="Введите номер телефона" type="tel" className="form__input">
                                      <span className="form__error" id="tel-input-error"></span>
                                      <label for="email" className="form__input-title">Электронная почта:</label>
                                      <input id="email" name="email" placeholder="Введите адрес электронной почты" type="email" className="form__input">
                                        <span className="form__error" id="email-input-error"></span>
                                        <p className="form__input-title">Укажите что вас заинтересовало?</p>
                                        <div className="form__checkbox-interest-container">
                                          <label for="products">
                                            <input id="products" type="checkbox" name="interest" value="products" className="form__invisible-checkbox">
                                              <span className="form__visible-checkbox"></span>
                                              <span className="form__checkbox-text">Интересует Продукция</span>
                </label>
                                            <label for="business">
                                              <input id="business" type="checkbox" name="interest" value="business" className="form__invisible-checkbox">
                                                <span className="form__visible-checkbox"></span>
                                                <span className="form__checkbox-text">Интересует Бизнес</span>
                </label>
                        </div>
                                            <label for="approval" className="form__checkbox-container">
                                              <input id="approval" type="checkbox" name="approval" value="yes" className="form__invisible-checkbox">
                                                <span className="form__visible-checkbox"></span>
                                                <span className="form__checkbox-text">Я даю согласие на обработку персональных данных,
                  регистрацию в компанию, соглашаюсь с условиями Политики Конфиденциальности.</span>
              </label>
                                              <label for="confirmation" className="form__checkbox-container">
                                                <input id="confirmation" type="checkbox" name="confirmation" value="yes" className="form__invisible-checkbox">
                                                  <span className="form__visible-checkbox"></span>
                                                  <span className="form__checkbox-text">Я подтверждаю , что у меня нет спонсора в Атоми
                  у которого я хотел(а) бы зарегистрироваться</span>
              </label>
                                                <button className="form__submit" type="submit">Отправить</button>
                    </form>
                </section>
            </main>

                                          <footer className="footer" id="footer">
                                            <div className="footer__social-container">
                                              <div className="footer__social-networks-container">
                                                <img src="<%=require('./image/networks.png')%>" alt="Картинка, обозначающая социальные сети" className="footer__image-networks">
                                                  <h3 className="footer__title">Свяжитесь с нами в соц. сетях</h3>
                                                  <div className="footer__messengers-container">
                                                    <a href="https://api.whatsapp.com/send?phone=79259375334" target="_blank" className="footer__social-link"><img
                                                      src="<%=require('./image/WhatsApp.svg')%>" alt="Иконка вотсаппа"
                                                      className="footer__social-icon">WhatsApp</a>
                                                      <a href="https://t.me/Tanya_Meshkova" target="_blank" className="footer__social-link"><img
                                                        src="<%=require('./image/Telegram.svg')%>" alt="Иконка телеграмма"
                                                        className="footer__social-icon">Telegram</a>
                                                        <a href="https://vk.com/club204115429" target="_blank" className="footer__social-link"><img
                                                          src="<%=require('./image/VKontakte.svg')%>" alt="Иконка ВКонтакте"
                                                          className="footer__social-icon">Vkontakte</a>
                        </div>
                                                        <p className="footer__annotation">Подписывайтесь на нас в мессенджерах и будьте в курсе всех новинок компании Атоми!
                        </p>
                    </div>
                                                      <div className="footer__mail-container">
                                                        <img src="<%=require('./image/postman.png')%>" alt="Картинка - бегущий почтальон" className="footer__image-mail">
                                                          <h3 className="footer__title">Напишите нам</h3>
                                                          <a href="#" className="footer__mail-link">terta1@mail.ru</a>
                                                          <p className="footer__annotation">Задавайте интересующие Вас вопросы по электронной почте.</p>
                    </div>
                                                      </div>
                                                      <img src="<%=require('./image/2730324.svg')%>" alt="Орнамент" className="footer__ornament">
                                                        <p className="footer__attention">Сайт носит информационно-справочный характер и ни при каких условиях не является публичной офертой. Полное или частичное копирование материалов данного сайта запрещены.</p>
                                                        <p className="footer__copyright">&copy; 2021. САЙТ ПАРТНЕРА АТОМИ</p>
            </footer> */
}
