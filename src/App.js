import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Body from "./components/body";

// pass value from search bar to app
// create callback function in the parent
// pass callback function as a prop to the child
// send value from app to body
// filter through employees using passed value
class App extends Component {
  state = {
    searchData: "",
  };

  onSearchCallback = (searchValue) => {
    this.setState({ searchData: searchValue });
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <SearchBar onSearchCallback={this.onSearchCallback} />
        <Body searchData={this.state.searchData} />
      </div>
    );
  }
}

export default App;
