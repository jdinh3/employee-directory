import React, { Component } from "react";
import API from "../utils/API";
import Table from "./EmployeeTable";
export default class Body extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
  };

  componentDidMount() {
    API.getEmployees().then((res) => {
      console.log(res);
      // maps through the employee data
      const holdData = res.data.results.map((employee) => {
        return employee;
      });
      this.setState({ employees: holdData });
      console.log(this.state.employees);
    });
  }

  render() {
    return (
      <div className="container">
        <Table employees={this.state.employees} />
      </div>
    );
  }
}
