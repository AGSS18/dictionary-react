import classes from './Images.module.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Images(props) {
    if(props.data.length) {
        return(
            <div className={classes.container}>
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
                {props.data.map((image, index) => {
                    return(
                        <a 
                            key={index} 
                            href={image.src.original} 
                            title={image.photographer} 
                            target="_blank" 
                            rel="noreferrer"
                            >
                                <img src={image.src.landscape} alt={image.photographer} />
                        </a>
                    )
                })}
            </div>
        )
    } else return null
}

export default Images;