import React, {useState} from "react";

function Search({onSearch, search}) {
  

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => onSearch(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
