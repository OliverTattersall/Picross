// import React, {Component} from 'react';
import Node from './Node.jsx'

import { useState } from "react";

function Picross({rows,cols}){
    console.log(rows, cols);
    let temp_g = new Array(rows);
    for(let i = 0; i < rows; i++){
      temp_g[i] = new Array(cols);
      for(let j = 0; j < cols; j++){
        temp_g[i][j] = i + j
      }
    }

    var [grid, updateGrid] = useState(temp_g);
    // useState
    // const grid = [
    //   [1,2,3,4],
    //   [1,2,3,4],
    //   [1,2,3,4]
      
    // ];
  // this.setState({grid});
  
    
      return(
      <div className='grid'>
        {grid.map((row) =>(
          <div className='row'>
            {row.map((val)=>{
              {console.log(val)}
              return <Node num = {val}></Node>
              // key = {(row, val)}
              // return <div className='box'><p key={val}>{val}</p></div>
            })}
          </div>
        ))}
      </div>
      );
  
  
  }


export default Picross;