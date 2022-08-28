import React from "react";
import s from "../Content.module.css";
import sB from './Female.module.css'
import Blue from '../../../resources/img/goods/female/blue.jpg'
import Yellow from '../../../resources/img/goods/female/t-shirt_yellow.jpg'
import Pink from '../../../resources/img/goods/female/t-shirt_pink.jpg'
import LightBlue from '../../../resources/img/goods/female/t-shirt_light_blue.jpg'

const Female = () => {
    return(
        <section className={s.goods} id="goods">
            <div className="container">
                <h2 className={s.goodsHeader}>Жіноче</h2>

                {/*goods-card-wrapper*/}
                <div className={s.goodsCardWrapper}>

                    {/*Card*/}
                    <div className={s.card}>
                        <a href="#" className={s.cardLink}>
                            <h3 className={s.cardTitle}>Темна бірюза</h3>
                            <img className={s.cardImg} src={Blue} alt="Темна бірюза"/>
                            <p>Розмір 46-48 <br/>Довжина виробу : 59 см Колір : Темна бірюза Колір
                                яскравий,насичений.
                                Склад : 100% італійський котон
                                Добре пропускає повітря, дихає та добре вбирає вологу. Тому її цілком комфортно
                                носити у спекотну пору року.
                                100 % італійський котон міцний,невибагливий у догляді,може використовуватися довгі
                                роки.
                                Ручне прання при температурі не більше 30 градусів,сушити в горизонталі,щоб уникнути
                                деформації виробу.</p>
                        </a>
                    </div>
                    {/*Card end*/}
                    {/*Card*/}
                    <div className={s.card}>
                        <a href="#" className={s.cardLink}>
                            <h3 className={s.cardTitle}>Жовтий тюльпан</h3>
                            <img className={s.cardImg}  src={Yellow} alt="Жовтий тюльпан"/>
                            <p>Розмір 48-54 <br/>Довжина виробу : 58-59 см Колір : Жовтий тюльпан. Колір
                                яскравий,насичений.
                                Склад : 100% італійська бавовна.
                                Найніжніша італійська бавовна,невагома легкість та яскравий насичений колір подарує
                                Вам комфорт та радістний настрій.
                                Відмінно пропускає повітря і не парить,при носінні буде активно виводити тепло від
                                тіла. Тому її цілком комфортно носити у спекотну пору року.
                                Ручне прання при температурі не більше 30 градусів,сушити в горизонталі,щоб уникнути
                                деформації виробу.</p>
                        </a>
                    </div>
                    {/*Card end*/}
                    {/*Card*/}
                    <div className={s.card}>
                        <a href="#" className={s.cardLink}>
                            <h3 className={s.cardTitle}>Ромашка</h3>
                            <img className={s.cardImg} src={Pink} alt="Ромашка"/>
                            <p>Розмір 44-48 <br/>Довжина виробу : 50 см Колір : Рожевий Колір яскравий,насичений.
                                Склад : 100% італійська бавовна
                                Футболка "Ромашка" в'язана гачком у техніці філейне в'язання з піксельним малюнком,
                                є реглан та росток,завдяки чого не буде дискомфорту при експлуатації виробу.
                                Добре пропускає повітря, дихає та добре вбирає вологу. Тому її цілком комфортно
                                носити у спекотну пору року.</p>
                        </a>
                    </div>
                    {/*Card end*/}
                    {/*Card*/}
                    <div className={s.card}>
                        <a href="#" className={s.cardLink}>
                            <h3 className={s.cardTitle}>Блакитна</h3>
                            <img className={s.cardImg} src={LightBlue} alt="Блакитна"/>
                            <p>100% мерсерізована бавовна. Має такі ж властивості,як звичайна.Різниця у скрутці
                                самої нитки,вона трохи жорсткіша,ніж звичайна бавовна і має трохи блиск,але в спеку
                                в ній дуже комфортно.</p>
                        </a>
                    </div>
                    {/*Card end*/}
                </div>
                {/*goods-card-wrapper end*/}

            </div>
            <div className={sB.btnBackWrapper}>
                <a href="/" className={sB.btnBack}>
                    ← на головну
                </a>
            </div>

            {/*modal window*/}
            <div className="modal hide">
                <div className="modal-dialog">
                    <div data-close='close' className="modal-close">&times;</div>
                    <div className="modal-content">

                    </div>
                </div>
            </div>
            {/*modal window end*/}
        </section>
    );
}

    export default Female;