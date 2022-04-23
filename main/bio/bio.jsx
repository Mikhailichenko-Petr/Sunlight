import style from "./bio.module.css"

export const Bio = () => {
    return(
        <div className={style.bio}>
            <div>
            <div>
                <div className={style.bio_one_line}>
                    <span>
                        <a href="#">108 отзывов</a> 
                    </span>
                    <span className={style.bio_reviews}>
                    <div className={style.review_stars_wrap}>
                            <div className={style.review_stars}>
                                <input className={style.star-4} type="radio" name="stars"/>
                                <label title="Отлично" for="star-4">
                                    <i className={style.fas}>★</i>
                                </label>
                                <input className={style.star-3} type="radio" name="stars" checked="checked" />
                                <label title="Хорошо" for="star-3">
                                    <i className={style.fas}>★</i>
                                </label>
                                <input className={style.star-2} type="radio" name="stars"/>
                                <label title="Нормально" for="star-2">
                                    <i className={style.fas}>★</i>
                                </label>
                                <input className={style.star-1} type="radio" name="stars"/>
                                <label title="Плохо" for="star-1">
                                    <i className={style.fas}>★</i>
                                </label>
                                <input className={style.star-0} type="radio" name="stars"/>
                                <label title="Ужасно" for="star-0">
                                    <i className={style.fas}>★</i>
                                </label>
                            </div>
                        </div>
                        <div>4.94</div>
                    </span>
                    <div>Артикул: 235978</div>
                </div>
                <div>
                    <h1>Золотые серьги</h1>
                </div>
            </div>
            <div>
                <div className={style.bio_two_line}>
                    <div>
                        <p>17 997 ₽</p>
                    </div>
                    <div>
                        <p><strike>59 990 ₽</strike></p>
                    </div>
                    <div>
                        <p>− 70%</p>
                    </div>
                </div>
            </div>
            <div className={style.bio_three_line}>
                <div><p>🔥 Осталось мало изделий. Успейте!</p></div>
            </div>
            <div className={style.bio_four_line}>
                <div className={style.bio_four_line_box}>
                    <button className={style.add_to_basket}>Добавить в корзину</button>
                    <button className={style.add_to_favorites}>♥</button>
                </div>
                <button className={style.bio_four_line_box_two}>Проверить наличие в магазине</button>
            </div>
            <div className={style.bio_five_line}>
                <h2>Как забрать?</h2>
                <div>
                    <div className={style.bio_five_line_box}>
                        <img src="./icon/kupit.png" alt="" width="30px"/>
                        <div>
                            <div><p>Забрать из<strong><u> 65 магазинов </u></strong>(в 60 в наличии)</p></div>
                            <div><p>Сегодня, 17 апреля, бесплатно</p></div>
                        </div>
                    </div>
                    <div className={style.bio_five_line_box}>
                    <img src="./icon/car.png" alt="" width="30px"/>
                    <div>
                        <div><p>Забрать из<strong><u>1960 пунктов выдачи заказов</u></strong></p></div>
                        <div><p>Начиная с 19 апреля, бесплатно</p></div>
                    </div>
                    </div>
                    <div className={style.bio_five_line_box}>
                    <img src="./icon/shop.png" alt="" width="30px"/>
                    <div>
                        <div><p><strong><u>Экспрес-доставка</u></strong>курьером</p></div>
                        <div><p>Сегодня, 17 апреля, бесплатно</p></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className={style.bio_six_line}>
                <div>
                    <h2>Описание</h2>
                </div>
                <div>
                    <ul>
                        <p>Серьги Розовое золото 585 пробы.</p>
                        <li className={style.bio_six_list}>
                            <p className={style.bio_six_name}>Бренд</p>
                            <div></div>
                            <a href="https://sunlight.net/catalog/sunlight.html" className={style.bio_six_data}>SUNLIGHT</a>
                        </li>
                        <li className={style.bio_six_list}>
                            <p className={style.bio_six_name}>Колекция</p>
                            <div></div>
                            <a href="https://sunlight.net/catalog/?collection=5775" className={style.bio_six_data}>Золотые украшения без вставок</a>
                        </li>
                        <li className={style.bio_six_list}>
                            <p className={style.bio_six_name}>Модель</p>
                            <div></div>
                            <p className={style.bio_six_data}>10-00-0000-27628*</p>
                        </li>
                        <li className={style.bio_six_list}>
                            <p className={style.bio_six_name}>Страна производства</p>
                            <div></div>
                            <p className={style.bio_six_data}>РОССИЯ</p>
                        </li>
                        <li className={style.bio_six_list}>
                            <p className={style.bio_six_name}>Материал изделия</p>
                            <div></div>
                            <p className={style.bio_six_data}>Розовое золото</p>
                        </li>
                        <li className={style.bio_six_list}>
                            <p className={style.bio_six_name}>Вес изделия</p>
                            <div></div>
                            <p className={style.bio_six_data}>2.7г</p>
                        </li>
                        <p>Украшения без вставок. Из-за отсутствия каких-либо вставок, такие ювелирные изделия обладают совершенством формы и безупречным цветовым сочетанием. Эти модели как нельзя лучше способны подчеркнуть женственность их обладательницы, акцентируя внимание на ее привлекательности, в то же время не отвлекая взгляд на блеск драгоценных камней. И не важно выберете вы золотые ювелирные серьги-пуссеты, конго или цепочки, вы в любом случае будете на высоте.</p>
                    </ul>
                </div>
            </div>
            <div className={style.bio_six_line}>
            <details>
                <summary>Обменять или вернуть просто</summary>
                Вам не подошло изделие? Обменяйте онлайн-покупки в течение 14 дней! Оформите заявку в мобильном приложении и получите быстрое решение без посещения магазина. Как создать заявку можно ознакомиться по <a href="https://sunlight.net/faq/service/">ссылке.</a>
                </details>
            </div>
            <div>
            <details>
                <summary>Гарантия качества</summary>
                В SUNLIGHT демократичные цены на нашу продукцию, а также высокое качество и оригинальность дизайнерских решений.Каждое украшение марки SL – это настоящее произведение ювелирного искусства. Покупая драгоценности у нас, Вы можете не сомневаться в правильности своего решения. Если Вы приобрели изделие с заводским браком – это не повод расстраиваться. Обратитесь в любой магазин SUNLIGHT с паспортом или позвоните в наш Контактный центр – и мы обязательно поможем.
            </details>
            </div>
            </div>
        </div>
    )
}