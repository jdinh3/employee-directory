import React, { Component } from "react";
import API from "../../utils/API";
import Table from "../components/EmployeeTable/index";

export default class EmployeeTable extends Component {
  state = {
    employees: [{}],
    filteredEmployees: [],
  };

  //   When we push this data into the state, it runs into issues, so i'm going to sanitize it
  componentDidMount() {
    API.getEmployees().then((res) => {
      const holdData = res.data.results.map((employee) => {
        return employee.name;
      });
      this.setState({ employees: holdData });
      console.log(this.state.employees);
    });
  }

  render() {
    return <Table />;
  }
}
