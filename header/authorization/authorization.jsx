export const Authorization=()=>{
    return(
        <div>
            <div>
                <img src="https://g0.sunlight.net/static/shop/images/cart/redpack.jpg" alt="" />
            </div>
            <div>
                <h3>Войти по номеру</h3>
                <form action="">
                    <input  name="phone"  placeholder="Введите номер телефона" type="tel" pattern="\+7\(9\d{2}\)\d{3}\-\d{2}\-\d{2}" tabindex="1" autofocus="" autocomplete="off" required="" maxlength="18" />
                    <button>Получить код</button>
                </form>
                <div class="agreement">
                    Нажимая «<span class="js-agreement-text">Получить код</span>», я&nbsp;соглашаюсь
                    с&nbsp;<a target="_blank" href="/loyalty_privilege/">условиями участия</a> в&nbsp;Клубе SUNLIGHT,
                    <a href="/confidential/" target="_blank">политикой конфиденциальности</a>
                    и&nbsp;подтверждаю согласие на получение сообщений рекламного характера.
                    <br/>Отказаться от рассылки можно в личном кабинете.
                </div>
            </div>
        </div>
    )
}