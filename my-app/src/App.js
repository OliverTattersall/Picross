import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
// import picross from './Picross/picross'
import Picross from './components/Picross';




function App() {


  return(
    <>
    <h1>Hello</h1>
    <Picross 
      rows={10}
      cols={10}
      >
      
    </Picross>
    
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
