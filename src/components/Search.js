import { useState } from "react";

import SearchEngine from "./SearchEngine";
import CardTall from "./ui/CardTall";

import classes from './Search.module.css';
import Logo from "./Logo";

function Search(props) {
    const [word, setWord] = useState(props.defaultWord);

    function handleSetWord(response) {
        setWord(response)
    }

    return(
        <CardTall>
            <Logo />
            <SearchEngine handleSetWord={handleSetWord} />
            <h2 className={classes.word}>{word}</h2>
        </CardTall>
    );
}

export default Search;