import style from "./header.module.css"

export const Header = () => {
    return(
        <header className={style.header} >
        <div className={style.header_block1}>
            <a href="" className={style.header_logo}>
               +7 966 760 98 22
            </a>
            <ul className={style.header_list}>
                <li className={style.header_list}>Обмен и возврат</li>
                <li className={style.header_list}>Статус заказа</li>
                <li className={style.header_list}>Магазины</li>
                <li className={style.header_list}>Доставка</li>
                <li className={style.header_list}>Ломбард</li>
                <div className={style.header_burger}>
                    <span></span>
                </div>
            </ul>
        </div>
        <div className={style.header_block2}>
             <a href="" className={style.header_logo2}>
                <img src="https://cataloged.ru/shops/logo/sanlajt.png" alt="logo" height="60px"/>
                
            </a>
            <div className={style.hamburger}>
                    <input id="menu__toggle" type="checkbox" />
                    <label className={style.menu__btn} for="menu__toggle">
                        <span></span>
                        <p>Каталог</p>
                    </label>
                <ul className={style.menu__box}>
                  <li><a className={style.menu__item} href="#">Главная</a></li>
                  <li><a className={style.menu__item} href="#">Проекты</a></li>
                  <li><a className={style.menu__item} href="#">Команда</a></li>
                  <li><a className={style.menu__item} href="#">Блог</a></li>
                  <li><a className={style.menu__item} href="#">Контакты</a></li>
                </ul>
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