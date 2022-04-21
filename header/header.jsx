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
                <nav className={style.mobile_menu}>
                    <input type="checkbox" id="checkbox" className={style.mobile_menu__checkbox} />
                    <label for="checkbox" className={style.mobile_menu__btn}><div className={style.mobile_menu__icon}></div></label>
                    <div className={style.mobile_menu_text}>Каталог</div>
                    <div className={style.mobile_menu__container}>
                    <div className={style.mobile_menu__list}>
                       <ul>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g8.sunlight.net/media/content/desktop-menu/categories/35f527efb07355870dee67f1f1f50a6c8bd25143.svg" alt="icon" width="30px"/><p>Все украшения</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g6.sunlight.net/media/content/desktop-menu/categories/0d09ba4834b1a1a01c0e7c1da6c823d792530e0e.svg" alt="icon" width="30px"/> <p>Новинки</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g0.sunlight.net/media/content/desktop-menu/categories/01468a634f971dc4868efd5fc81593321eacd74b.svg" alt="icon" width="30px"/> <p>Акции</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g5.sunlight.net/media/content/desktop-menu/categories/961b368deeaa65c1f5ee79e790da4a5b0bd333ab.svg" alt="icon" width="30px"/> <p>Золото</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g5.sunlight.net/media/content/desktop-menu/categories/0d58e8e1a4ea7a8c4290af7b933d0674aab2d364.svg" alt="icon" width="30px"/> <p>Серебро</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g6.sunlight.net/media/content/desktop-menu/categories/1f0989e944b69b80825ea83d96cdea71328274d3.svg" alt="icon" width="30px"/> <p>Брелианты</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g0.sunlight.net/media/content/desktop-menu/categories/9b98a6341b30c5f59ac49569d9c066e71b47acc8.svg" alt="icon" width="30px"/> <p>Кольца</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g5.sunlight.net/media/content/desktop-menu/categories/a31b320c3f61fe001b6cac0f8c9af71ead1b868d.svg" alt="icon" width="30px"/> <p>Серьги</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g4.sunlight.net/media/content/desktop-menu/categories/e7bced08b4aeaa15cd203cd165c14db7cc4f1818.svg" alt="icon" width="30px"/> <p>Колье</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g2.sunlight.net/media/content/desktop-menu/categories/552132e2aa71558ae807db2ca98bd65da5c4371d.svg" alt="icon" width="30px"/> <p>Браслеты</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g6.sunlight.net/media/content/desktop-menu/categories/59245252fb427e483c28d915273845be22210ef4.svg" alt="icon" width="30px"/> <p>Цепи</p></a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g0.sunlight.net/media/content/desktop-menu/categories/a9c04ca9495a7d802a3530d8cb49bdf98772c2da.svg" alt="icon" width="30px"/> <p>Подвески</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g2.sunlight.net/media/content/desktop-menu/categories/a516fb1e20aa0f9b6f977e79a2d0941cb3ff1baf.svg" alt="icon" width="30px"/> <p>Броши</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g5.sunlight.net/media/content/desktop-menu/categories/bb267fbdb937a54afbf23e8c5c6fa7dfaeb2afd7.svg" alt="icon" width="30px"/> <p>Часы</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g6.sunlight.net/media/content/desktop-menu/categories/839ec265f1a77380de6f6655de60553855d440ab.svg" alt="icon" width="30px"/> <p>Коллекции</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g3.sunlight.net/media/content/desktop-menu/categories/c4886e9d911fd54a43b496e9c6093e674a1cd4d8.svg" alt="icon" width="30px"/> <p>Подарки</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g7.sunlight.net/media/content/desktop-menu/categories/1099d7151a12c078ccd9b72ab1026c28fb45e59c.svg" alt="icon" width="30px"/> <p>Свадьба</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g5.sunlight.net/media/content/desktop-menu/categories/38174640ad3d97f248690e45d35bfe7de84b10f1.svg" alt="icon" width="30px"/> <p>Для него</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g8.sunlight.net/media/content/desktop-menu/categories/17cbdd3eedb16af676e145214ca1fb9a51d35085.svg" alt="icon" width="30px"/> <p>Для детей</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g0.sunlight.net/media/content/desktop-menu/categories/7f1167c89647f28a05a3471a838d70a40c3114d9.svg" alt="icon" width="30px"/> <p>Талисманы</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g4.sunlight.net/media/content/desktop-menu/categories/09a94ea633d6c2a4a263bbb0e1ae489174d1edf1.svg" alt="icon" width="30px"/> <p>Религия</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g9.sunlight.net/media/content/desktop-menu/categories/4f8ce7892b9040f247b5c51b24ed426e75271ccb.svg" alt="icon" width="30px"/> <p>Для дома</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g1.sunlight.net/media/content/desktop-menu/categories/6c90bb90152ceb61db339d03acd34cd4377b9e7e.svg" alt="icon" width="30px"/> <p>Шармы</p> </a></li>
                            <li className={style.mobile_menu__item}><a href="#" className={style.mobile_menu__link}><img src="https://g3.sunlight.net/media/content/desktop-menu/categories/be43a7b11b9b9733dbd3ac44d4208555bf7c638a.svg" alt="icon" width="30px"/> <p>Косметика</p> </a></li>
                       </ul>
                       <div>
                           <div>
                              <section className={style.mobile_menu_section}><a href=""><img src="https://g0.sunlight.net/media/content/desktop-menu/block-items/b26377089939361606681dc43befe372905e6847.jpg" alt="" /></a></section>
                              <section className={style.mobile_menu_section_one}>
                                <a href=""><img src="https://g3.sunlight.net/media/content/desktop-menu/block-items/2f23898cbee5c26ba655a87664cd5357831d90dd.jpg" alt="" /></a>
                                <a href=""><img src="https://g0.sunlight.net/media/content/desktop-menu/block-items/d31926284df1fa6ed49fe34e623c6e18b06f50f1.jpg" alt="" /></a>
                                <a href=""><img src="https://g8.sunlight.net/media/content/desktop-menu/block-items/14a4a815a2af9e44ffa54c79a813ba8cc4260038.jpg" alt="" /></a>
                              </section>
                              <section className={style.mobile_menu_section_one}><a href=""></a></section>
                              <section className={style.mobile_menu_section_one}><a href=""></a></section>
                              <section className={style.mobile_menu_section_four}>
                                <div className={style.mobile_menu_section_four_title}><p>Вставка</p></div>
                                <div className={style.mobile_menu_section_four_box}>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g0.sunlight.net/media/content/desktop-menu/block-items/e53cd655944305faac5b0725c8014732b3e97fce.png" alt="" /></a> </div>
                                        <div><a href="#"><p>Бриллиант</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g5.sunlight.net/media/content/desktop-menu/block-items/d4962b2d1a1b8cc6a64016174dd53f03a7ca6ec5.png" alt="" /></a> </div>
                                        <div><a href="#"><p>Изумруд</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g1.sunlight.net/media/content/desktop-menu/block-items/394ee36611b10536985a9f315c208f82f0ea90e7.png" alt="" /></a> </div>
                                        <div><a href="#"><p>Сапфир</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g3.sunlight.net/media/content/desktop-menu/block-items/79fa37f9bbd02c3a1848cb925fc61badf2ac32f1.png" alt="" /></a> </div>
                                        <div><a href="#"><p>Жемчуг</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g4.sunlight.net/media/content/desktop-menu/block-items/2f6dc52ffccbdab645d026b59af241f1ddb7ed10.png" alt="" /></a> </div>
                                        <div><a href="#"><p></p>Топаз</a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g4.sunlight.net/media/content/desktop-menu/block-items/874b8c3784f250ceb56d1032c2497df3869ca609.png" alt="" /></a> </div>
                                        <div><a href="#"><p></p>Рубин</a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g5.sunlight.net/media/content/desktop-menu/block-items/049a5027ee428ccbff2fe049eac1abd138dcb4bd.png" alt="" /></a> </div>
                                        <div><a href="#"><p>Гранит</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g2.sunlight.net/media/content/desktop-menu/block-items/389609d0544dc09c42a9527cfa21f7688e2986c3.png" alt="" /></a> </div>
                                        <div><a href="#"><p> Аметист</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g5.sunlight.net/media/content/desktop-menu/block-items/527f85e241fb021afd2863777930f7c33e69916c.png" alt="" /></a> </div>
                                        <div><a href="#"><p> Агат</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g6.sunlight.net/media/content/desktop-menu/block-items/623ceb0e2cd694c2f1237ebaf10b9613fd0591ad.png" alt="" /></a> </div>
                                        <div><a href="#"><p> Лазурит</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g2.sunlight.net/media/content/desktop-menu/block-items/c49ee04b0d16cea5ce08eb0e2f46974afc767362.png" alt="" /></a> </div>
                                        <div><a href="#"><p> Хризолит</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g0.sunlight.net/media/content/desktop-menu/block-items/e2d4116ba8ab0100907e6ba04406cde356e6bcb0.png" alt="" /></a> </div>
                                        <div><a href="#"><p> Опал</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g3.sunlight.net/media/content/desktop-menu/block-items/43c68c37b06cc0e242a096f91b413e9c2487a12d.png" alt="" /></a> </div>
                                        <div><a href="#"><p> Морганит</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g2.sunlight.net/media/content/desktop-menu/block-items/160d8d8550a9657c2c17396f9dcec4eba27e8bcc.png" alt="" /></a> </div>
                                        <div><a href="#"><p> Кварц</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g9.sunlight.net/media/content/desktop-menu/block-items/aff74a277247cf133a3b5be0400ad44cb8765534.png" alt="" /></a> </div>
                                        <div><a href="#"><p> Оникс</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g1.sunlight.net/media/content/desktop-menu/block-items/8f5feadcfc6c7ccce9085c9193c490f058e6a3be.png" alt="" /></a> </div>
                                        <div><a href="#"><p> Александрит</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g7.sunlight.net/media/content/desktop-menu/block-items/8801125ff4c0fa0d5ef295d4729bbba41daab50b.png" alt="" /></a> </div>
                                        <div><a href="#"><p>Турмалин </p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g5.sunlight.net/media/content/desktop-menu/block-items/18962de4c018b789ce59238151656b81678f7ae5.png" alt="" /></a> </div>
                                        <div><a href="#"><p> Алпанит</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g7.sunlight.net/media/content/desktop-menu/block-items/42bbbc5176f2c12a42488b4d0cc73dd4f908a853.png" alt="" /></a> </div>
                                        <div><a href="#"><p> Бирюза</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g3.sunlight.net/media/content/desktop-menu/block-items/8546f4527730e690f410c6d7fba940c0f2df30d6.png" alt="" /></a> </div>
                                        <div><a href="#"><p> Янтарь</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g4.sunlight.net/media/content/desktop-menu/block-items/8ce5c88f4d019c897997c7670795456edd1603b7.png" alt="" /></a> </div>
                                        <div><a href="#"><p> Шпинель</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g4.sunlight.net/media/content/desktop-menu/block-items/f554124740a8ea2f34a28fcef900e4c159107d1d.png" alt="" /></a> </div>
                                        <div><a href="#"><p> Эмаль</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g8.sunlight.net/media/content/desktop-menu/block-items/5ee4352be3f31369585df80ea0cfb76bbc32a5b3.png" alt="" /></a> </div>
                                        <div><a href="#"><p> Керамика</p></a> </div>
                                    </div>
                                    <div className={style.mobile_menu_section_four_rock}>
                                        <div><a href="#"><img src="https://g0.sunlight.net/media/content/desktop-menu/block-items/600e15e294260c727062f48bde9f350b88512088.png" alt="" /></a> </div>
                                        <div><a href="#"><p>Керамика</p></a> </div>
                                    </div>
                                </div>
                              </section>
                              <section className={style.mobile_menu_section}><a href=""><img src="https://g1.sunlight.net/media/content/desktop-menu/block-items/5e3734f64037ceff111eb14846dedaaad2696cc7.jpg" alt="" /></a></section>
                           </div>
                       </div>
                    </div>
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