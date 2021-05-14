import React from "react";

function EmployeeTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Images</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>(224)622-6222</td>
          <td>
            <a href="mailto: Otto@gmail.com"> Otto@gmail.com</a>
          </td>
          <td>07-22-1964</td>
        </tr>
      </tbody>
    </table>
  );
}

export default EmployeeTable;
