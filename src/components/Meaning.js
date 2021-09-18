import classes from './Results.module.css';

function Meaning(props) {
    return(
        <p className={classes.p}>{props.id}- {props.meaning.definitions.map(function (definition, index){
            return definition.definition
        })}</p>
    );
}

export default Meaning;