import helth from "../image/pro-kompleksy-dlya-zdorovya-i-krassoty.jpg";
import care from "../image/pro-uhod-za-licom-i-telom.jpg";
import home from "../image/pro-dlya-doma-i-zhizni.jpg";
import food from "../image/pro-produkty-pitaniya.jpg";
import stuff from "../image/pro-posuda-dlya-kuhni.jpg";
import wear from "../image/pro-odezhda-i-obuv.jpg";
import sleep from "../image/pro-postelnye-prednadlezhnosti.jpg";
import electronic from "../image/pro-elektronika.jpg";
import other from "../image/pro-prochee.jpg";

function Products() {
  return (
    <section className="products" id="products">
      <h2 className="products__title">ПРОДУКЦИЯ АТОМИ</h2>
      <p className="products__subtitle">
        Перспективы развития у компании Atomy на российском и других рынках
        планеты огромные. Продукция премиум класса по лучшей цене от
        производителя различных товаров подходит каждой семье. Каждый
        потребитель и партнер легко подберет корейскую продукцию по своим
        желаниям и потребностям. Ведь компания Атоми несет массовость и престиж!
      </p>
      <ul className="products__list">
        <li className="products__list-element">
          <img src={helth} alt="." className="products__list-image" />
          <h3 className="products__list-title">ЗДОРОВЬЕ И КРАСОТА</h3>
          <p className="products__list-description">
            Первоклассные комплексы для здоровья и красоты человеческого тела.
            Продукты для похудения и общеукрепляющие средства.
          </p>
        </li>
        <li className="products__list-element">
          <img src={care} alt="." className="products__list-image" />
          <h3 className="products__list-title">УХОД ЗА ЛИЦОМ И ТЕЛОМ</h3>
          <p className="products__list-description">
            Отличные крема и комплексы по уходу за кожей лица и всего тела.
            Декоративная косметика и уход за волосами.
          </p>
        </li>
        <li className="products__list-element">
          <img src={home} alt="." className="products__list-image" />
          <h3 className="products__list-title">ДЛЯ ДОМА И ЖИЗНИ</h3>
          <p className="products__list-description">
            В данную категорию товаров входят гигиенические средства, товары для
            уборки и зубная гигиена.
          </p>
        </li>
        <li className="products__list-element">
          <img src={food} alt="." className="products__list-image" />
          <h3 className="products__list-title">ПРОДУКТЫ ПИТАНИЯ</h3>
          <p className="products__list-description">
            Только полезные для здоровья продукты. Соль и органический сахар,
            чай и кофе из арабики, сок, джем и другие продукты.
          </p>
        </li>
        <li className="products__list-element">
          <img src={stuff} alt="." className="products__list-image" />
          <h3 className="products__list-title">ПОСУДА ДЛЯ КУХНИ</h3>
          <p className="products__list-description">
            Отличный набор сковородок и кастрюл с отличным качеством металла.
            Приготовление пищи станет приятным и полезным.
          </p>
        </li>
        <li className="products__list-element">
          <img src={wear} alt="." className="products__list-image" />
          <h3 className="products__list-title">ОДЕЖДА И ОБУВЬ</h3>
          <p className="products__list-description">
            Качественная одежда и обувь премиум класса. В ассортименте трусы,
            майки, футболки и качественные колготки.
          </p>
        </li>
        <li className="products__list-element">
          <img src={sleep} alt="." className="products__list-image" />
          <h3 className="products__list-title">ПОСТЕЛЬНЫЕ ПРИНАДЛЕЖНОСТИ</h3>
          <p className="products__list-description">
            Превосходного качества постельные наборы и ортопедические подушки.
            Прекрасный вариант для ценящих качество и уют в доме.
          </p>
        </li>
        <li className="products__list-element">
          <img src={electronic} alt="." className="products__list-image" />
          <h3 className="products__list-title">ЭЛЕКТРОНИКА</h3>
          <p className="products__list-description">
            Очиститель воздуха, фен для сушки волос и другие приспособления для
            ухода за волосами.
          </p>
        </li>
        <li className="products__list-element">
          <img src={other} alt="." className="products__list-image" />
          <h3 className="products__list-title">ПРОЧЕЕ</h3>
          <p className="products__list-description">
            Подарочные пакеты, сумки для покупок, каталоги и другие полезные
            материалы для сотрудничества с компанией.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Products;
