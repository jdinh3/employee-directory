import React from "react";

function Table(props) {
  console.log(props);

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
      <tbody>
        <tr>
          <th scope="row">
            <img src="https://www.placecage.com/c/100/150" alt="employee"></img>
          </th>
          <td>Name</td>
          <td className="text-justify">(224)622-6222</td>
          <td>
            <a href="mailto: Otto@gmail.com"> Otto@gmail.com</a>
          </td>
          <td>07-22-1964</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
