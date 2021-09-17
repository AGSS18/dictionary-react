import logo from '../media/logo.png';
import classes from './Logo.module.css';

function Logo() {
    return(
        <div className={classes.logo}>
            <img className={classes.image} src={logo} alt="Logo" />
            <h1 className={classes.h1}>Dictionary <span className={classes.span}> <a href="https://github.com/AGSS18/dictionary-react" target="_blank">Open source built</a> by Ana Sala</span> </h1>
        </div>
    );
}

export default Logo;