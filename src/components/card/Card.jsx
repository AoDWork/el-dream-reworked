import s from "./Card.module.css"

const Card = (props) => {
    return(
        <div className={s.card}>
            <a href="/female" className={s.cardLink}>
               <h3 className={s.cardTitle}>{props.cardName}</h3>
               <img className={s.cardImg} src={props.img} alt="Жіноче"/>
            </a>
        </div>
    );
}

export default Card;