import classes from './Phonetics.module.css';

function Phonetics(props) {
    console.log(props.phonetics[0].text)
    return(
        <div className={classes.phonetics} >
            <a className={classes.icon} href={props.phonetics[0].audio} target="_blank" rel="no-reff"><i className="fas fa-volume-up"></i></a>
            {props.phonetics[0].text}

        </div>
    );
}

export default Phonetics;