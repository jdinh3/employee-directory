import React, { Component } from "react";

class SearchBar extends Component {
  // Sets the component's initial state
  state = {
    search: "",
  };

  handleInputChange = (event) => {
    // Grabs the value of the user's input
    const { value } = event.target;

    this.setState({ value });
    console.log(value);
  };

  render() {
    return (
      <div className="form-outline m-4">
        <input
          value={this.state.value}
          onChange={this.handleInputChange}
          name="employeeSearch"
          type="text"
          id="form1"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    );
  }
}

export default SearchBar;
