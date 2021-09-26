import classes from './Results.module.css';

function Definitions(props) {
    return(
        <p className={classes.p}>-{props.definition} 
            <span style={{fontWeight: 700, textDecoration: "underline"}}>{props.speech}</span>
        </p>
    );
}

export default Definitions;