import React from "react";

function MahasiswaIndex(props) {
  return (
    <table classname="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nama</th>
          <th>Umur</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{props.name}</td>
          <td>19</td>
        </tr>
      </tbody>
    </table>
  );
}

export default MahasiswaIndex;
