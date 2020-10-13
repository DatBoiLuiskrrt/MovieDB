import React, { useState } from "react";

export default function Search() {
    const [query, setQuery] = useState('');

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");

        

        const url = `https://api.themoviedb.org/3/search/movie?api_key=7ef6152a444c38c3338ad6ca46aa51c2&language=en-US&query=${query}&page=1&include_adult=false`;
        

        try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    }
    catch(error){
        console.log("error");
    }
}

    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">
                Movie name
            </label>
                <input 
                 type="text"
                 className="input" 
                 placeholder="Search"
                 value={query}
                 onChange={ (e) => setQuery(e.target.value)}>
                </input>
                <button className="button" type="submit">Enter</button>
            
        </form>

    )
}