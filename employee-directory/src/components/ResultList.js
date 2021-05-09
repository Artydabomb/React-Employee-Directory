import React from "react";

function ResultList(props) {
  console.log("props, resultLit", props);

  return (
    <div className="Table">
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th onClick={props.handleAgeFilter}>Age</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Picture</th>
        </tr>
        {props.results.map((result) => (
          <tr className="list-group-item" key={result.id}>
            <td>{result.name.first}</td>
            <td>{result.name.last}</td>
            <td>{result.dob.age}</td>
            <td>{result.email}</td>
            <td>{result.cell}</td>
            <td><img src={result.picture.large} alt="Employee Picture"></img></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ResultList;