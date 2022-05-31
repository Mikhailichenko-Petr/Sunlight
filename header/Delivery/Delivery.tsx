import React, {FC} from "react"
import { DeliveryReducerType } from "../../redux/deliveryReducer"

import style from "./Delivery.module.css"

type DeliveryType={
  data: DeliveryReducerType
  question_one: ()=> void
  question_two: ()=> void
  question_three: ()=> void
  question_four: ()=> void
  question_five: ()=> void 
  question_six: ()=> void
}

export const Delivery:FC<DeliveryType> =({data,question_one,question_two,question_three,question_four,question_five,question_six})=>{ 
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
                <div onClick={question_one} className={style.list}>1.Срок доставки</div>
                <div onClick={question_two} className={style.list}>2.Экспресс-доставка</div>
                <div onClick={question_three} className={style.list}>3.Статус заказа</div>
                <div onClick={question_four} className={style.list}>4.Примерка</div>
                <div onClick={question_five} className={style.list}>5.Оплата заказа</div>
                <div onClick={question_six} className={style.list}>6.Обменять или вернуть просто!</div>
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

