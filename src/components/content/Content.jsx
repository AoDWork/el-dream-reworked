import React from "react";
import s from './Content.module.css'
import Female from '../../resources/img/main/category_female.jpg'
import Male from '../../resources/img/main/category_male.jpg'
import Childrens from '../../resources/img/main/category_childrens.jpg'
import Plaid from '../../resources/img/main/category_plaid.jpg'


const Content = () => {
    return (
        <section className={s.goods} id="goods">
            <div className="container">
                <h2 className={s.goodsHeader}>Асортимент</h2>

                {/*goods-card-wrapper*/}
                <div className={s.goodsCardWrapper}>

                    {/*Card*/}
                    <div className={s.card}>
                        <a href="/female" className={s.cardLink}>
                            <h3 className={s.cardTitle}>Жіноче</h3>
                            <img className={s.cardImg} src={Female} alt="Жіноче"/>
                        </a>
                    </div>
                    {/*Card end*/}
                    {/*Card*/}
                    <div className={s.card}>
                        <a href="/male" className={s.cardLink}>
                            <h3 className={s.cardTitle}>Чоловіче</h3>
                            <img className={s.cardImg} src={Male} alt="Чоловіче"/>
                        </a>
                    </div>
                    {/*Card end*/}
                    {/*Card*/}
                    <div className={s.card}>
                        <a href="/childrens" className={s.cardLink}>
                            <h3 className={s.cardTitle}>Дитяче</h3>
                            <img className={s.cardImg} src={Childrens} alt="Дитяче"/>
                        </a>
                    </div>
                    {/*Card end*/}
                    {/*Card*/}
                    <div className={s.card}>
                        <a href="/plaid" className={s.cardLink}>
                            <h3 className={s.cardTitle}>Пледи</h3>
                            <img className={s.cardImg} src={Plaid} alt="Пледи"/>
                        </a>
                    </div>
                    {/*Card end*/}
                </div>
                {/*goods-card-wrapper end*/}

            </div>
        </section>
    );
}

export default Content;