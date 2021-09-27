import classes from './Images.module.css';

function Images(props) {
    if(props.data.length) {
        return(
            <div className={classes.container}>
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