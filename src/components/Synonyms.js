function Synonyms(props) {
    console.log(props.synonyms)
    if(props.synonyms) {
        return(
            <ul>
                {props.synonyms.map((synonym, index) => {
                    if(index < 5){
                        return (
                            <li key={index}>{synonym}</li>
                        )
                    } else return null
                })}
            </ul>
        )
    } else return null
}

export default Synonyms;