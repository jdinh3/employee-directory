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

  sortByName = () => {
    const sortedEmployees = this.state.employees.sort((a, b) => {
      let fa = a.name.first.toLowerCase(),
        fb = b.name.first.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    this.setState({ employees: sortedEmployees });
  };

  render() {
    return (
      <div className="container">
        <Table
          employees={
            !this.props.searchData
              ? this.state.employees
              : this.filteredEmployees
          }
          sortEmployeeCallback={this.sortByName}
        />
        <p>{this.props.searchValue}</p>
      </div>
    );
  }
}
