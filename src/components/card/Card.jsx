import s from "./Card.module.css"

const Card = (props) => {
    return(
        <div className={s.card}>
            "Hello World"
            {/*<a href="/female" className={s.cardLink}>*/}
            {/*    <h3 className={s.cardTitle}>Жіноче</h3>*/}
            {/*    <img className={s.cardImg} src={Female} alt="Жіноче"/>*/}
            {/*</a>*/}
        </div>
    );
}

export default Card;