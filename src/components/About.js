function About() {
  return (
    <section className="about" id="about">
      <h2 className="about__title">О КОМПАНИИ АТОМИ</h2>
      <p className="about__subtitle">Абсолютное качество по абсолютной цене</p>
      <div className="about__texts-container">
        <div className="about__texts">
          <p className="about__text">
            Atomy (Атоми) - Южно-Корейская компания, прославившаяся натуральными
            и безопасными продуктами для здоровья. Компания Атоми легально
            работает с 2009 года и пользуется популярностью в Японии, США,
            Канаде, Мексике и странах Юго-Восточной Азии. А с 12 декабря 2018
            года открыта и в России. Распространение премиум продукции
            повседневного спроса идет путем сетевого маркетинга через
            интернет-магазин компании.
          </p>
          <p className="about__text">
            Бесплатная регистрация, отсутствие стартового набора, инвестиций и
            обязательных покупок делают компанию Атоми лидером в условиях для
            новичков. Благодаря созданному товарообороту, корейская компания
            щедро платит своим партнерам. Корейцы умеют продвигать товар и
            делать бизнес успешным, поэтому возможности создания успешного
            бизнеса с Atomy безграничны!
          </p>
        </div>
        <iframe
          title="О компании Atomy"
          className="about__video"
          src="https://www.youtube.com/embed/hU6KrJjhjpU"
          allowFullScreen
        ></iframe>
      </div>
      <div className="about__besides-container">
        <div className="about__besides">
          <span
            className="fas fa-address-book about__besides-icon about__besides-icon_color_yellow"
            aria-hidden="true"
          ></span>
          <h3 className="about__besides-title">20-30</h3>
          <p className="about__besides-text">
            человек в день вступают в нашу команду
          </p>
        </div>
        <div className="about__besides">
          <span
            className="fas fa-money-bill-alt about__besides-icon about__besides-icon_color_green"
            aria-hidden="true"
          ></span>
          <h3 className="about__besides-title">1 МЛРД</h3>
          <p className="about__besides-text">
            долларов товарооборот за прошлый год
          </p>
        </div>
        <div className="about__besides">
          <span
            className="fas fa-users about__besides-icon about__besides-icon_color_orange"
            aria-hidden="true"
          ></span>
          <h3 className="about__besides-title">25 МЛН</h3>
          <p className="about__besides-text">
            человек уже стали партнерами корейской компании
          </p>
        </div>
        <div className="about__besides">
          <span
            className="fas fa-globe about__besides-icon about__besides-icon_color_blue"
            aria-hidden="true"
          ></span>
          <h3 className="about__besides-title">16 СТРАН</h3>
          <p className="about__besides-text">
            в которых работает Атоми и 2 страны на предстарте
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
