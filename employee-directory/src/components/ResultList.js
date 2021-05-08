import React from "react";

function ResultList(props) {
  console.log("props, resultLit", props);

  return (
    <>
      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
        {props.results.map((result) => (
          <tr className="list-group-item" key={result.id}>
            <td>{result.name.first}</td>
            <td>{result.name.last}</td>
            <td>{result.dob.age}</td>
            <td>{result.email}</td>
            <td>{result.cell}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default ResultList;