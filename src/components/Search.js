import { useState, useEffect } from "react";
import axios from 'axios';

import SearchEngine from "./SearchEngine";
import CardTall from "./ui/CardTall";
// import CardLarge from "./ui/CardLarge";
// import CardSmall from "./ui/CardSmall";

import classes from './Search.module.css';
import Logo from "./Logo";
import Results from "./Results";
import Layout from "./layouts/Layout";

function Search(props) {
    const [word, setWord] = useState(props.defaultWord);
    const [data, setData] = useState({});

    function handleResponse(response) {
        setData(response.data);
        // console.log(response.data[0]);
    }

    function handleSetWord(response) {
        setWord(response);
    }
    
    useEffect(() => {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }, [word]);

    return(
        <Layout>
            <CardTall>
                <Logo />
                <SearchEngine handleSetWord={handleSetWord} />
                <h2 className={classes.word}>{word}</h2>
                <Results data={data}/>
            </CardTall>
            {/* <CardSmall>
                Grammar
            </CardSmall>
            <CardSmall>
                Examples
            </CardSmall>
            <CardLarge>
                Images
            </CardLarge>
            <CardSmall>
                Pronunciation
            </CardSmall>
            <CardSmall>
                Related words
            </CardSmall> */}
        </Layout>
    );
}

export default Search;