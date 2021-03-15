import React from "react";

// functional
const Searchbar = (props) => {
    return (
        <div>
            <input value={props.searchTerm}
                type="text" 
                onChange={props.handleChange}
                name="searchbar"
                placeholder="Find Employee">
            </input>
            <button type="search">Search</button>
        </div>
    )
}

export default Searchbar;