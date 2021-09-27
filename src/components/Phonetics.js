import classes from './Phonetics.module.css';

function Phonetics(props) {
    return(
        <div className={classes.phonetics} >
            <a className={classes.icon} href={props.phonetics[0].audio} target="_blank" rel="noreferrer"><i className="fas fa-volume-up"></i></a>
            {props.phonetics[0].text}

        </div>
    );
}

export default Phonetics;