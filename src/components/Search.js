import { useState, useEffect } from "react";
import axios from 'axios';

import SearchEngine from "./SearchEngine";
import CardTall from "./ui/CardTall";

import classes from './Search.module.css';
import Logo from "./Logo";
import Results from "./Results";

function Search(props) {
    const [word, setWord] = useState(props.defaultWord);
    const [data, setData] = useState({});

    function handleResponse(response) {
        setData(response.data);
        console.log(response.data);
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
            <Results data={data}/>
        </CardTall>
    );
}

export default Search;