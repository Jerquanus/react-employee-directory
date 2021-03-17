import logo from './logo.svg';
import './App.css';
import React from "react";
// import Api from './utils/API.js';
import Searchbar from './components/Searchbar'

const App =()=> {
    return (
      <div className="container">
        <Searchbar />
      </div>
    );
}

export default App;