import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { SearchBarWrapper } from "./SearchBar.styled";

const SearchBar = () => {
  const { keyword, setKeyword } = useState(false);

  return (
    <>
      <SearchBarWrapper className="search-bar-wrapper">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          key="searchUser"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        ></input>
      </SearchBarWrapper>
    </>
  );
};

export default SearchBar;
