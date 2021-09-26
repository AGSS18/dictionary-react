import Definitions from "./Definitions";

function Meaning(props) {
    console.log(props);
     return(
             props.meaning.definitions.map((definition, index) => {
                 console.log(definition)
                 return (
                     <Definitions key={index} definition={definition.definition} speech={props.meaning.partOfSpeech} />
                 )
             })
     );
}

export default Meaning;