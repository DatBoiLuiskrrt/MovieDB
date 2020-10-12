import React from "react";

export default function Search() {
    return (
        <form className="form">
            <label className="label" htmlFor="query">
                Movie name
            </label>
                <input 
                 type="text"
                 className="query" 
                 placeholder="Search">
                </input>
                <button className="button" type="submit">Enter</button>
            
        </form>

    )
}