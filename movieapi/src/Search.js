import React from "react";

export default function Search() {

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");

        const query = "Jurassic Park";

        const url = `https://api.themoviedb.org/3/movie/550?api_key=7ef6152a444c38c3338ad6ca46aa51c2&language=en-US&query=${query}page=1&include_adult=false`;

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
                 placeholder="Search">
                </input>
                <button className="button" type="submit">Enter</button>
            
        </form>

    )
}