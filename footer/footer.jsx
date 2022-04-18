import style from "./footer.module.css"

export const Footer = () => {
    return(
        <footer className={style.footer}>
        <div className={style.footer_copy}>
            <a href="https://sunlight.net/">© Интернет-магазин SUNLIGHT 2022</a>
        </div>
        <div className={style.footer_docs}>
            <a href="https://sunlight.net/club_rules/">
                Пользовательские соглашения
            </a>
        </div>
        <div className={style.footer_language}>
            <p>Русский - English</p>
        </div>
        </footer>
    )
}