import classes from './Cards.module.css';

function CardSmall(props) {
    return(
        <div className={classes.cardSmall}>
            {props.children}
        </div>
    );
}

export default CardSmall;