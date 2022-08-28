import React from "react";
import s from './Header.module.css'
import Chevron from '../../resources/img/header/chevron-down.svg'

const Header = () => {
    return (
        <div>
            <h1 className="header-title"></h1>
            <p className="header-subtitle"></p>
            <a href="#goods" className={s.headerChevron}>
                <img src={Chevron}/>
            </a>
        </div>
    );
}

export default Header;