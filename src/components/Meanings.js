import classes from './Meanings.module.css';
import Synonyms from './Synonyms';

function Meanings(props) {
    return(
        <div className={classes.meaning} >
            <h3 className={classes.titles} >{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map((definition, index) => {
                index = index + 1;
                if(index < 4) {
                    return (
                        <div key={index}>
                            <p className={classes.definitions} >
                                {index}- {definition.definition}
                            </p>
                            {definition.example && 
                                <p className={classes.examples} >
                                        Example: "{definition.example}."
                                </p>
                            }
                            <Synonyms synonyms={definition.synonyms} />
                        </div>
                    )
                } else return null
            })}
        </div>
    );
}

export default Meanings;