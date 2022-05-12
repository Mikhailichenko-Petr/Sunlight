import style from "./header.module.css"
import React, { useState } from "react"
import {NavLink } from "react-router-dom"
import { Modal } from "./modal/modals/modal";
import { useSelector } from "react-redux";
import { Order_status } from "../Order_status/Order_status";
export const Header = () => {
    const [isModal, setModal] = React.useState(false);
    const Basket=useSelector(res=>res.BasketReducer.Basket.length)
    
    return(
        <header className={style.header} >
        <div className={style.header_block1}>
            <a href="" className={style.header_logo}>
               +7 966 760 98 22
            </a>
            <nav className={style.header_list}>
                <NavLink to="/Exchange" activeClassName={style.header_list}>Обмен и возврат</NavLink>
                <a ClassName={style.header_list} onClick={() => setModal(true)}>Статус заказа</a>
                <NavLink to="/Shops" activeClassName={style.header_list}>Магазины</NavLink>
                <NavLink to="/Delivery" activeClassName={style.header_list}>Доставка</NavLink>
                <NavLink to="/Pawnshop" activeClassName={style.header_list}>Ломбард</NavLink>
                <div className={style.header_burger}>
                    <span></span>
                </div>
            </nav>
        </div>
        <div className={style.header_block2}>
            <NavLink to="/" activeClassName={style.header_logo2}>
                <svg width="210" height="20" viewBox="0 0 210 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.26633 0C6.46341 0 4.97893 0.280835 3.92575 0.811727L3.9176 0.815833L3.90928 0.819563C1.80869 1.76078 0.332791 3.55509 0.332791 5.86348C0.332791 7.01667 0.66174 7.90804 1.19899 8.6204C1.74119 9.33932 2.51192 9.89716 3.42436 10.3479C4.89419 11.074 6.65243 11.4892 8.28235 11.874C8.69673 11.9719 9.10282 12.0677 9.49377 12.1663C10.5553 12.4338 11.7743 13.1882 11.7743 14.4079C11.7743 15.3249 11.2058 15.8574 10.6259 16.2959C10.2741 16.5619 9.81782 16.7203 9.31059 16.815C8.79999 16.9103 8.20779 16.9464 7.56007 16.9464C6.40169 16.9464 5.07825 16.8011 3.88773 16.351C2.89576 15.976 2.01268 15.4961 1.23949 15.004L0 17.844C0.782972 18.4232 1.89499 18.9104 3.15534 19.2916C5.98352 20.147 9.38295 20.3658 12.0584 19.167C13.269 18.6245 14.195 17.8167 14.713 17.0333L14.7166 17.0279L14.7203 17.0226C15.3753 16.0981 15.6349 15.184 15.6349 14.1231C15.6349 12.882 15.3582 11.8743 14.7629 11.2742L14.7501 11.2613L14.7385 11.2473C14.0504 10.4148 13.1075 9.88266 12.0436 9.48407C11.264 9.19199 10.4508 8.98151 9.64123 8.77199C9.34046 8.69415 9.04021 8.61643 8.74237 8.53472C7.26504 8.26224 6.28146 7.86284 5.585 7.58003L5.58484 7.57997L5.58275 7.57912C5.53143 7.55828 5.48167 7.53808 5.43339 7.51861L5.40356 7.50658L5.37601 7.48992C5.00848 7.26759 4.67658 7.02374 4.4374 6.71684C4.18873 6.39776 4.05206 6.02584 4.05206 5.57867C4.05206 5.16786 4.13403 4.77678 4.33275 4.42061C4.52867 4.06947 4.82459 3.77642 5.21752 3.53551C5.56693 3.27718 6.01671 3.1223 6.51581 3.02912C7.02641 2.93379 7.61861 2.89775 8.26633 2.89775C10.0381 2.89775 11.7982 3.405 13.4314 4.2906L14.5519 1.46654C13.81 1.01311 12.9444 0.662369 11.8518 0.417578L11.8466 0.416423L11.8415 0.415132C10.7477 0.139452 9.50963 0 8.26633 0Z" fill="#FF0000"></path><path d="M27.877 0.283708V11.1314C27.877 14.0449 28.7009 16.2104 30.1615 17.6828C31.6151 19.1483 33.7571 19.8444 36.3861 19.9854C39.1255 19.9833 41.2705 19.1551 42.7309 17.6828C44.1915 16.2104 45.0154 14.0449 45.0154 11.1314V0.283708H41.2961V10.989C41.2961 12.8887 40.8633 14.4207 40.0737 15.3759C39.2674 16.3513 38.0052 16.8029 36.5168 16.8029C34.9461 16.8029 33.7214 16.3084 32.9025 15.2815C32.0973 14.2717 31.7375 12.8118 31.7375 10.989V0.283708H27.877Z" fill="#FF0000"></path><path d="M76.4919 0.283708V19.5582H73.5256L62.5078 6.432V19.5582H58.8352V0.283708H61.9427L72.8193 13.5523V0.283708H76.4919Z" fill="#FF0000"></path><path d="M90.4521 0.283708V19.5582H104.2V16.5181H94.1714V0.283708H90.4521Z" fill="#FF0000"></path><path d="M116.02 19.5582V0.283708H119.88V19.5582H116.02Z" fill="#FF0000"></path><path d="M143.305 0.144626C141.243 0.144626 139.469 0.559429 137.834 1.38357C136.215 2.19957 134.995 3.42537 134.038 4.942C133.097 6.43312 132.688 8.06411 132.688 9.99549C132.688 11.7875 133.098 13.56 134.038 15.049L134.045 15.0604L134.051 15.0723C135.816 18.3335 139.615 19.8464 143.164 19.8464C144.524 19.8464 145.895 19.572 147.286 19.1514L147.291 19.1499L147.296 19.1486C148.728 18.7547 149.779 18.2401 150.815 17.4827V9.97069H147.519V15.7825L147.318 15.8985C146.256 16.5105 144.912 16.8062 143.587 16.8062C142.254 16.8062 141.054 16.5069 139.998 15.8985C138.947 15.293 138.19 14.5292 137.589 13.47C136.99 12.4129 136.689 11.3475 136.689 9.99549C136.689 8.79039 136.988 7.58188 137.589 6.52096C138.19 5.46179 138.947 4.69794 139.998 4.09251C141.054 3.48406 142.254 3.18478 143.587 3.18478C145.549 3.18478 147.258 3.85358 148.693 5.30328L151.074 3.13193C150.188 2.18323 149.186 1.46634 147.964 0.972498C146.456 0.420161 144.95 0.144626 143.305 0.144626Z" fill="#FF0000"></path><path d="M164.329 19.5582V0.283708H168.048V8.25848H177.889V0.283708H181.75V19.5582H177.889V11.2986H168.048V19.5582H164.329Z" fill="#FF0000"></path><path d="M193.427 0.283708V3.32386H199.783V19.5582H203.644V3.32386H210V0.283708H193.427Z" fill="#FF0000"></path></svg>
            </NavLink>
            <div className={style.hamburger}>
                <nav className={style.mobile_menu}>
                    <input type="checkbox" id="checkbox" className={style.mobile_menu__checkbox} />
                    <label for="checkbox" className={style.mobile_menu__btn}><div className={style.mobile_menu__icon}></div></label>
                    <div className={style.mobile_menu_text}>Каталог</div>
                    <div className={style.mobile_menu__container}>
                        <Modal />
                    </div>
                </nav>
            </div>
              <form className={style.header_input}>
                  <img src='https://svgsilh.com/svg_v2/306102.svg' alt="input" height="25px" />
                  <input type="text" placeholder="Поиск в SUNLIGHT" className={style.inpt}/>
                  <div className={style.delite}>X</div>
                  <input className={style.input_btn} type="submit" value="Найти"></input>
              </form>
            <nav className={style.sidebar_menu}>
                    <a className={style.sidebar_box_icon}>
                        <img src="https://cdn.icon-icons.com/icons2/3106/PNG/512/person_avatar_account_user_icon_191606.png" alt="icon" height="40px"/>
                        <p href="" className={style.sidebar_link}>Войти</p>
                    </a >
                    <NavLink to="/Basket" className={style.NavLink}>
                        <div className={style.sidebar_box_icon}>
                            <img src="https://img.icons8.com/material-outlined/384/shopping-cart--v2.png" alt="icon" height="40px"/>
                            <p href="" className={style.sidebar_link}>Корзина</p>
                        </div>
                        <span className={style.basket_number}>{Basket}</span>
                    </NavLink>
                    <a className={style.sidebar_box_icon}>
                        <img src="https://svgsilh.com/svg_v2/24037.svg" alt="icon" height="40px"/>
                        <p href="" className={style.sidebar_link}>Избранное</p>
                    </a>
            </nav>
        </div>
            <Order_status
                isVisible={isModal}
                onClose={() => setModal(false)}
            />
        </header>
    )
}