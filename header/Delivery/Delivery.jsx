import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { DeliveryAddAC } from "../../redux/action"
import style from "./Delivery.module.css"


export const Delivery =()=>{
    const dispatch=useDispatch()
    const data=useSelector(res=>res.DeliveryReducer)
    const text_one=()=>{
      dispatch(DeliveryAddAC(
        'Дата и интервал доставки зависят от адреса получения и будут указаны в Корзине при оформлении заказа. Если в заказе несколько изделий, они могут быть доставлены разными посылками в разное время. Накануне дня доставки Вас уведомит Транспортная компания СМС сообщением или звонком на указанный в заказе номер телефона. В день доставки за 30 мин. до доставки с Вами свяжется курьер.',
        '1.Срок доставки'
        ))
      
    }
    const text_two=()=>{
      dispatch(DeliveryAddAC(
        'Услуга Экспресс-доставки пока доступна только для наших клиентов в г. Москва. При оформлении заказа до 15:00 мы доставим Вам его сегодня до 22:00! При оформлении заказа с 15:00 до 23:59 мы доставим его в течение следующего дня! За 60 минут до доставки с Вами предварительно свяжется курьер. Примерка возможна только в присутствии курьера или после полной оплаты заказа. При отказе от заказа доставка остается бесплатной. Оплатить заказ можно: онлайн, наличными, банковской картой, ApplePay или GooglePay. ',
        '2.Экспресс-доставка'
        ))
    }
    const text_three=()=>{
      dispatch(DeliveryAddAC(
        'Отследить статус Вашего заказа можно в Личном кабинете, в разделе «Онлайн заказы». По факту передачи заказа в Курьерскую службу Вам поступит СМС-сообщение со ссылкой на отслеживания статуса доставки. В личном кабинете статус заказа изменится на «Осуществляется доставка». Перейдя по ссылке, по номеру заказа и номеру телефона вы также сможете узнать статус доставки, изменить дату и интервал. Если заказ в статусе «Осуществляется доставка», но дата и время заказа по ссылке не указаны или недоступны для изменения, то Вам необходимо позвонить в Контактный-центр компании «SUNLIGHT». ',
        '3.Статус заказа'
        ))
    }
    const text_four=()=>{
      dispatch(DeliveryAddAC(
        'При получении заказа до момента его оплаты Вы должны осмотреть и ознакомиться с комплектностью заказа, НО только в присутствии курьера! Возможность примерки при доставке транспортными компаниями недоступна до момента 100% оплаты изделий из заказа. Вам не подошло изделие? Срок обмена и возврата покупок онлайн-заказов в SUNLIGHT больше, чем положено по закону РФ «О защите прав потребителей», и составляет 14 дней с момента покупки. Вы можете обменять или вернуть изделие надлежащего качества при условии сохранения его товарного вида, пломбы, ярлыка, в любом магазине SUNLIGHT. Если Вы приобрели изделие с заводским браком — это не повод расстраиваться. Обратитесь в любой магазин SUNLIGHT с паспортом или позвоните в наш Контактный центр — и мы обязательно поможем. Мы работаем для Вас 24/7. Контактный центр: 8-800-234-99-99. С условиями примерки товара можно ознакомиться по ссылке. ',
        '4.Примерка'
        ))
    }
    const text_five=()=>{
      dispatch(DeliveryAddAC(
        'Оплатить заказ можно: онлайн, наличными, банковской картой, ApplePay или GooglePay. С условиями обмена и возврата товара можно ознакомиться по ссылке. ',
        '5.Оплата заказа'
        ))
    }
    const text_six=()=>{
      dispatch(DeliveryAddAC(
        'Получите быстрое решение без посещения магазина. Оформите заявку в мобильном приложении: Выберите товар из списка покупок Добавьте комментарий и фото Дождитесь решения Обратитесь в любой магазин SUNLIGHT и покажите QR-код заявки продавцу. С условиями обмена и возврата товара можно ознакомиться по ссылке. Как создать заявку можно ознакомиться по ссылке. ',
        '6.Обменять или вернуть просто!'
        ))
    }
    return (
      <div className={style.Delivery}>
        <div><h1>Доставка в г.Москва</h1></div>
        <section className={style.box_one}>
          <div className={style.box_one_line}>
            <div className={style.box_one_header}><h2>Способ доставки</h2></div>
            <div>В магазин SUNLIGHT</div>
            <div>В пункт выдачи</div>
            <div>Курьерская доставка</div>
          </div>
          <div className={style.box_one_line}>
            <div className={style.box_one_header}><h2>Магазины и пункты выдачи</h2></div>
            <div>64 магазина</div>
            <div>2294 пункта выдачи</div>
            <div>Доступно в вашем регионе</div>
          </div>
          <div className={style.box_one_line}>
              <div className={style.box_one_header}><h2>Стоимость</h2></div>
              <div>Бесплатно при заказе от 990 ₽, до 990 ₽ стоимость доставки 180 ₽</div>
            </div>
          <div className={style.box_one_line}>  
            <div className={style.box_one_header}><h2>Срок доставки</h2></div>
            <div>Дата и интервал доставки зависят от адреса получения и будут указаны в Корзине при оформлении заказа.</div>
          </div>
          <div className={style.box_one_line}>
            <div className={style.box_one_header}><h2>Способ оплаты</h2></div>
            <div>
              <ul>
                <li>Оплата наличным</li>
                <li>Онлайн-оплата:
                  <ul>
                    <li>22</li>
                    <li>1</li>
                    <li>21</li>
                    <li>11</li>
                    <li>12</li>
                    <li>31</li>
                    <li>33</li>
                  </ul>
                </li>
              </ul>
            </div>
            </div>
        </section>
        <section className={style.box_two}>
          <div className={style.box_two_container}>
            <div>
                <div>
                  <div><img src="https://g2.sunlight.net/static/shop/svg/delivery/free-delivery.svg" alt="" /></div>
                  <div>
                    <span>Бесплатная доставка </span>
                    <span>от 990 ₽</span>
                  </div>
                </div>
                <div>
                  <div><img src="https://g2.sunlight.net/static/shop/svg/delivery/fitting_.svg" alt="" /></div>
                  <div>
                  <span>Можно заказать несколько </span>
                  <span>изделий на выбор</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div><img src="https://g1.sunlight.net/static/shop/svg/delivery/pickpoint.svg" alt="" /></div>
                <div>
                  <span>Доставим в любой </span>
                  <span>из 400 магазинов</span>
                </div>
              </div>
              <div>
                <div><img src="https://g7.sunlight.net/static/shop/svg/delivery/courier-delivery.svg" alt="" /></div>
                <div>
                  <span>Доставка курьером </span>
                  <span>в любое время</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div><img src="https://g9.sunlight.net/static/shop/svg/delivery/payment_.svg" alt=""/></div>
                <div>
                  <span>Оплата наличными, </span>
                  <span>онлайн или картой</span>
                </div>
              </div>
              <div>
                <div><img src="https://g0.sunlight.net/static/shop/svg/delivery/express-delivery.svg" alt=""/></div>
                <div>
                  <span>Экспресс-доставка </span>
                  <span>по Москве</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={style.box_three}>
          <div><h2>Остались вопросы?</h2></div>
          <div className={style.text}>
              <div>
                <div onClick={text_one} className={style.list}>1.Срок доставки</div>
                <div onClick={text_two} className={style.list}>2.Экспресс-доставка</div>
                <div onClick={text_three} className={style.list}>3.Статус заказа</div>
                <div onClick={text_four} className={style.list}>4.Примерка</div>
                <div onClick={text_five} className={style.list}>5.Оплата заказа</div>
                <div onClick={text_six} className={style.list}>6.Обменять или вернуть просто!</div>
              </div>
              <div className={style.listDescription}>
                <h2>{data.Header}</h2>
                <p>{data.text}</p>
              </div>
          </div>
        </section>
      </div>
      );
}

