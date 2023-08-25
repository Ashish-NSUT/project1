import React from 'react';
import Sidebar from '@/Components/sideBar'
import SearchBar from '@/Components/searchbar'


const Pairaddress = () => {
  return (
    <div className="app">
      <Sidebar /> 
      <div className="main-page">
        <SearchBar/>
        <div className="container">
          <h1 className="heading">Pair Search Results</h1>
          <div className="cards-container">
                <div className="card">
                <h3>Basic Info</h3>
                <p>Pair created at</p>
                </div>
                <div className="card">
                  <h3>Card 2</h3>
                  <p>Card content goes here.</p>
                </div>
                <div className="card">
                  <h3>Card 1</h3>
                  <p>Card content goes here.</p>
                </div>
                <div className="card">
                  <h3>Card 2</h3>
                  <p>Card content goes here.</p>
                </div>
                 
          </div>
        </div>
      </div>
    </div>
  );
};



export default Pairaddress