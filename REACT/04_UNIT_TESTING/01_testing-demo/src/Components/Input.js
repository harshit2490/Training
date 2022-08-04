import React, { useState } from "react";

function Input({ showDiv }) {
  const [searchWord, setSearchWord] = useState("");
  return (
    <div>
      <input
        type="text"
        data-testid="searchBar"
        placeholder="Search..."
        onChange={(e) => setSearchWord(e.target.value)}
      />

      <h1 data-testid="displaySearch">{searchWord}</h1>
      {showDiv && <div data-testid="divWeWantToShow">Hello,Jest Testing</div>}
    </div>
  );
}

export default Input;
