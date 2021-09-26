import classes from './Results.module.css';
import Meaning from './Meaning';


function Results(props) {
    if(props.data.length) {
        return(
            <div className={classes.results}>
                <div className={classes.divH3}>
                    <h3 className={classes.h3}>Definitions</h3>
                </div>
                    {props.data[0].meanings.map(function(meaning, index){
                        index = index + 1;
                        return <div key={index}>
                                    <Meaning meaning={meaning} id={index} />
                                </div>
                    })}
            </div>
        );
    } else {
        return null;
    }
    
}

export default Results;