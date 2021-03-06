import classes from './Synonyms.module.css';

function Synonyms(props) {
    if(props.synonyms) {
        return(
            <ul className={classes.synonyms} >
                {props.synonyms.map((synonym, index) => {
                    if(index < 5){
                        return (
                            <li key={index}>| {synonym} </li>
                        )
                    } else return null
                })}
            </ul>
        )
    } else return null
}

export default Synonyms;