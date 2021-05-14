import React from "react";

function Table(props) {
  // console.log("meh", props.employees[0].name.first);

  const employeeData = props.employees.map((employee) => {
    return (
      <tbody>
        <tr>
          <th scope="row">
            <img
              src={employee.picture.large}
              alt="{employee.name.first}{employee.name.last}"
            ></img>
          </th>
          <td>
            {employee.name.first} {employee.name.last}
          </td>
          <td className="text-justify">{employee.phone}</td>
          <td>
            <a href="mailto: Otto@gmail.com">{employee.email}</a>
          </td>
          <td>{employee.dob.date}</td>
        </tr>
      </tbody>
    );
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Images</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      {employeeData}
    </table>
  );
}

export default Table;
