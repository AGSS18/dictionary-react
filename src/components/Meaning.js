import Definitions from "./Definitions";

function Meaning(props) {
     return(
             props.meaning.definitions.map((definition, index) => {
                 return (
                     <Definitions key={index} definition={definition.definition} speech={props.meaning.partOfSpeech} />
                 )
             })
     );
}

export default Meaning;