export const Authorization=()=>{
    return(
        <div>
            <div>
                <img src="https://g0.sunlight.net/static/shop/images/cart/redpack.jpg" alt="" />
            </div>
            <div>
                <h3>Войти по номеру</h3>
                <form action="">
                    <input  name="phone"  placeholder="Введите номер телефона" type="tel" pattern="\+7\(9\d{2}\)\d{3}\-\d{2}\-\d{2}" required={undefined}  />
                    <button>Получить код</button>
                </form>
                <div className="agreement">
                    Нажимая «<span className="js-agreement-text">Получить код</span>», я соглашаюсь
                    с <a target="_blank" href="/loyalty_privilege/">условиями участия</a> в Клубе SUNLIGHT,
                    <a href="/confidential/" target="_blank">политикой конфиденциальности</a>
                    и подтверждаю согласие на получение сообщений рекламного характера.
                    <br/>Отказаться от рассылки можно в личном кабинете.
                </div>
            </div>
        </div>
    )
}