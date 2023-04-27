// import React, {Component} from 'react';
import Node from "./Node.jsx";

// import { useState } from "react";

function Picross({ rows, cols }) {
  console.log(rows, cols);
  var grid = new Array(rows);
  for (let i = 0; i < rows; i++) {
    grid[i] = new Array(cols);
    for (let j = 0; j < cols; j++) {
      grid[i][j] = i + j;
      // temp_g[i][j]= <Node num={i+j}></Node>
    }
  }
  // var [grid, updateGrid] = useState(temp_g);

  return (
    <div className="grid col s9">
      {grid.map((row) => (
        <div className="blockrows">
          {row.map((val) => {
            // {
            // console.log(val);
            // }
            // {
            // row[0] == 0 || val == 0 ? console.log(val) : console.log(-1);
            // }
            return row[0] == 0 && val - row[0] != 0 ? (
              <p className="numsv">
                1 <br />2
              </p>
            ) : row[0] != 0 && val - row[0] != 0 ? (
              <Node num={val}></Node>
            ) : val - row[0] == 0 && row[0] != 0 ? (
              <p className="numsh">1 2</p>
            ) : (
              ""
              // <p></p>
            );
            // return <Node num={val}></Node>;
            // return grid[row][val];
            // key = {(row, val)}
            // return <div className='box'><p key={val}>{val}</p></div>
          })}
        </div>
      ))}
    </div>
  );
}

export default Picross;
