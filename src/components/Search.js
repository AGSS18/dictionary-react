import { useState, useEffect } from "react";
import axios from 'axios';
import classes from './Search.module.css';
import Results from './Results';
import Header from "./Header";
import Phonetics from './Phonetics';
import Images from "./Images";

function Search(props) {
    const [word, setWord] = useState(props.defaultWord);
    const [data, setData] = useState({});
    const [images, setImages] = useState({});

    function handleResponse(response) {
        setData(response.data);
    }

    function handlePexelsResponse(response) {
        setImages(response.data.photos);
    }

    function handleSetWord(response) {
        setWord(response);
    }
    
    useEffect(() => {
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse);

        const pexelsKey = "563492ad6f917000010000016e090026f11b47819c44b89308f104e0";
        const headers = {"Authorization" : `Bearer ${pexelsKey}`};
        const pexelsUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
        axios.get(pexelsUrl, {headers: headers}).then(handlePexelsResponse);

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
                        <Images data={images} />
                        <Results data={data} word={word} />
                      </div>
                  </div>
        );
    } else return null
}

export default Search;