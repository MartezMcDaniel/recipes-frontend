import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Search(props) {
  const history = useHistory();
  const [search, setSearch] = useState("");

  const searchAPI = async () => {
    history.push({
      pathname: "/results",
      state: {
        search,
      },
    });
  };

  return (
    <div>
      <form className="searchbar" onSubmit={searchAPI}>
        <input
          placeholder="Search Recipes..."
          style={{ fontSize: "15px" }}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
