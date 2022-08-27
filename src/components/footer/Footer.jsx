import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="footer-row">
                // footer-copyright
                <div className="footer-copyright footer-column">
                    <div className="footer-copyright-name">El.Dream</div>
                    <p>Виготовлено в Україні!</p>
                </div>
                // footer-copyright end

                // footer-icons
                <div className="footer-icons footer-column">
                    <p className="footer-icons-row">Соціальні мережі:
                        <a href="https://www.instagram.com/el.dream_knitt/" target="_blank">
                            <img src="./img/social/instagram.svg" alt=""/>
                        </a>
                        <a href="#" target="_blank">
                            <img src="./img/social/facebook.svg" alt=""/>
                        </a>
                    </p>
                </div>
                // footer-icons end

                <div className="footer-contacts footer-column">
                    <a href="https://t.me/Lencya2" className="footer-button" target="_blank">
                        Зв'язатися у телеграмі
                    </a>
                    <p>Напишіть мені, щоб замовити чи дізнатися вартість товару.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
