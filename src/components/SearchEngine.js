import { useState } from 'react';

import classes from './SearchEngine.module.css';

function SearchEngine(props) {
    const [word, setWord] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        props.handleSetWord(word);
    }

    function handleWord(event) {
        setWord(event.target.value);
    }

    return(
        <div className={classes.SearchEngine}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <button type="submit" className={classes.icon}><i className={"fas fa-search icon"}></i></button>
                <input onChange={handleWord} type="search" placeholder="Search Word" />
            </form>
        </div>
    );
}

export default SearchEngine;