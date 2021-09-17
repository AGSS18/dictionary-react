import classes from './Cards.module.css';

function CardLarge(props) {
    return(
        <div className={classes.cardLarge}>
            {props.children}
        </div>
    );
}

export default CardLarge;