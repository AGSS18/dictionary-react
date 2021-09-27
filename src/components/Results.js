import classes from './Results.module.css';
import Meanings from './Meanings';


function Results(props) {
    console.log(props.data[0].meanings.length)
    if(props.data.length) {
        return(
            <div className={classes.results}>
                <section className={classes["meanings-section"]}>
                    {props.data[0].meanings.map((meaning, index) => {
                        return(
                            <section key={index}>
                                <Meanings meaning={meaning} />
                            </section>
                        )
                    })}
                </section>
            </div>
        );
    } else return null;
    
}

export default Results;