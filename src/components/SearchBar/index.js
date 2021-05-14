import React from "react";

function Searchbar(props) {
  return (
    <div className="form-outline m-4">
      <input
        type="search"
        id="form1"
        className="form-control"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  );
}

export default Searchbar;
