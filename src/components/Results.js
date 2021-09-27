import classes from './Results.module.css';
import Phonetics from './Phonetics';
import Meanings from './Meanings';


function Results(props) {
    if(props.data.length) {
        return(
            <div className={classes.results}>
                <h2 className={classes.word}>{props.word}</h2>
                <Phonetics phonetics={props.data[0].phonetics} />
                {props.data[0].meanings.map((meaning, index) => {
                    return(
                        <div key={index}>
                            <Meanings meaning={meaning} />
                        </div>
                    )
                })}
            </div>
        );
    } else return null;
    
}

export default Results;