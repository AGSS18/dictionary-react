import { useState } from "react";

import SearchEngine from "./SearchEngine";
import CardTall from "./ui/CardTall";

import classes from './Search.module.css';

function Search(props) {
    const [word, setWord] = useState(props.defaultWord);

    function handleSetWord(response) {
        setWord(response)
    }

    return(
        <CardTall>
            <SearchEngine handleSetWord={handleSetWord} />
            <h1 className={classes.word}>{word}</h1>
        </CardTall>
    );
}

export default Search;