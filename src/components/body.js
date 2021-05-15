import React, { Component } from "react";
import API from "../utils/API";
import Table from "./EmployeeTable";
export default class Body extends Component {
  state = {
    employees: [],
  };
  filteredEmployees = [];

  componentDidMount() {
    API.getEmployees().then((res) => {
      console.log(res);
      // maps through the employee data
      const holdData = res.data.results.map((employee) => {
        return employee;
      });
      this.setState({ employees: holdData });
    });
  }

  componentDidUpdate() {
    const filtered = this.state.employees.filter((employee) => {
      return employee.name.first
        .toLowerCase()
        .includes(this.props.searchData.toLowerCase());
    });
    this.filteredEmployees = filtered;
  }

  render() {
    return (
      <div className="container">
        <Table
          employees={
            !this.props.searchData
              ? this.state.employees
              : this.filteredEmployees
          }
        />
        <p>{this.props.searchValue}</p>
      </div>
    );
  }
}
