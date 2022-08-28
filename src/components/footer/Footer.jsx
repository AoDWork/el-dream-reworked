import React from "react";
import s from "./Footer.module.css"
import Insta from '../../resources/img/social/instagram.svg'

const Footer = () => {
    return (
        <div className='container'>
            <div className={s.footerRow}>
                {/*footer-copyright*/}
                <div className={`${s.footerCopyright} ${s.footerColumn}`}>
                    <div className={s.footerCopyrightName}>El.Dream</div>
                    <p>Виготовлено в Україні!</p>
                </div>
                {/*footer-copyright end*/}

                {/*footer-icons*/}
                <div className={`${s.footerIcons} ${s.footerColumn}`}>
                    <p className={s.footerIconsRow}>Соціальні мережі:
                        <a href="https://www.instagram.com/el.dream_knitt/" target="_blank">
                            <img src={Insta} alt=""/>
                        </a>
                        <a href="#" target="_blank">
                            <img src="https://www.svgrepo.com/show/118826/facebook-letter-logo.svg" alt="Face"/>
                        </a>
                    </p>
                </div>
                 {/*footer-icons end*/}

                <div className={`${s.footerContacts} ${s.footerColumn}`}>
                    <a href="https://t.me/Lencya2" className={s.footerButton} target="_blank">
                        Зв'язатися у телеграмі
                    </a>
                    <p>Напишіть мені, щоб замовити чи дізнатися вартість товару.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
