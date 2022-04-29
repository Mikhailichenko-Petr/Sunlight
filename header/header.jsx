import style from "./header.module.css"
import React, { useState } from "react"
import {NavLink } from "react-router-dom"
import { Modal } from "./modal/modals/modal";
export const Header = () => {
    return(
        <header className={style.header} >
        <div className={style.header_block1}>
            <a href="" className={style.header_logo}>
               +7 966 760 98 22
            </a>
            <nav className={style.header_list}>
                <NavLink to="/Exchange" activeClassName={style.header_list}>Обмен и возврат</NavLink>
                <NavLink to="/Order_status" activeClassName={style.header_list}>Статус заказа</NavLink>
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
                <img src="https://cataloged.ru/shops/logo/sanlajt.png" alt="logo" height="50px"/>
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
                    <div className={style.sidebar_box_icon}>
                        <img src="https://cdn.icon-icons.com/icons2/3106/PNG/512/person_avatar_account_user_icon_191606.png" alt="icon" height="40px"/>
                        <a href="" className={style.sidebar_link}>Войти</a>
                    </div >
                    <div className={style.sidebar_box_icon}>
                        <img src="https://img.icons8.com/material-outlined/384/shopping-cart--v2.png" alt="icon" height="40px"/>
                        <a href="" className={style.sidebar_link}>Корзина</a>
                    </div>
                    <div className={style.sidebar_box_icon}>
                        <img src="https://svgsilh.com/svg_v2/24037.svg" alt="icon" height="40px"/>
                        <a href="" className={style.sidebar_link}>Избранное</a>
                    </div>
            </nav>
        </div>
        </header>
    )
}