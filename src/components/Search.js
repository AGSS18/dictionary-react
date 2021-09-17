import { useState, useEffect } from "react";
import axios from 'axios';

import SearchEngine from "./SearchEngine";
import CardTall from "./ui/CardTall";

import classes from './Search.module.css';
import Logo from "./Logo";

function Search(props) {
    const [word, setWord] = useState(props.defaultWord);

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function handleSetWord(response) {
        setWord(response);
    }
    
    useEffect(() => {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }, [word]);


    return(
        <CardTall>
            <Logo />
            <SearchEngine handleSetWord={handleSetWord} />
            <h2 className={classes.word}>{word}</h2>
        </CardTall>
    );
}

export default Search;