import { useState, useEffect } from "react";
import axios from 'axios';
import classes from './Search.module.css';
import Results from './Results';
import Header from "./Header";
import Phonetics from './Phonetics';

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


    if(data.length) {
        return(
                  <div>
                      <div className={classes["search-engine"]}>
                        <Header handleSetWord={handleSetWord} />
                      </div>
                      <div>
                        <section className={classes["search-word"]} >
                            <h2 className={classes.word}>{word}</h2>
                            <Phonetics phonetics={data[0].phonetics} />
                        </section>
                        <Results data={data} word={word} />
                      </div>
                  </div>
        );
    } else return null
}

export default Search;