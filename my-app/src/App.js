// import logo from './logo.svg';
import React, {Component, useState} from 'react';
import './App.css';
// import picross from './Picross/picross'
import Picross from './components/Picross';




function App() {

  const [size, changeSize] = useState(15);

  console.log(size)
  return(
    <>
    <h1>Hello</h1>
    <div className = "wrapper row">
      <div className='buttons col s2' >
        <h5>Game size</h5>
        <button className='btn' onClick={()=>{changeSize(5)}}>5x5</button>
        <br/>
        <button className='btn' onClick={()=>{changeSize(10)}}>10x10</button>
        <br/>
        <button className='btn' onClick={()=>{changeSize(15)}}>15x15</button>
        <br/>
        <button className='btn' onClick={()=>{changeSize(20)}}>20x20</button>
        <br/>
        <button className='btn' onClick={()=>{changeSize(25)}}>25x25</button>
      </div>
    
    <Picross 
      rows={size+1}
      cols={size+1}
      >
    
    </Picross>
    </div>
    <br></br>
    
    </>
    
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
