import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Body from "./components/body";
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
