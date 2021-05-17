import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="jumbotron header jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">
          Click on Name to sort employees alphabetically or use the search box
          to narrow your results.
        </p>
      </div>
    </div>
  );
}

export default Header;
