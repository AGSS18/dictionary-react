import { useState, useEffect } from "react";
import axios from 'axios';
import Logo from './Logo';
import SearchEngine from './SearchEngine';
import Layout from "./layouts/Layout";

import classes from './Search.module.css';
import Results from './Results';
import ResultsRight from "./ResultsRight";



function Search(props) {
    const [word, setWord] = useState(props.defaultWord);
    const [data, setData] = useState({});

    function handleResponse(response) {
        setData(response.data);
    }

    function handleSetWord(response) {
        setWord(response);
    }
    
    useEffect(() => {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }, [word]);

    console.log(data)

    return(
            <Layout>
              <div className={classes["search-engine"]} >
                 <Logo />
                 <SearchEngine handleSetWord={handleSetWord} />
                  <h2 className={classes.word}>{word}</h2>
                  <Results data={data}/>
              </div>
              <ResultsRight data={data} />
            </Layout>
    );
}

export default Search;