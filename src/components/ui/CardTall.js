import classes from './Cards.module.css';

function CardTall(props) {
    return(
        <div className={classes.cardTall}>
            {props.children}
        </div>
    );
}

export default CardTall;