import React from 'react';
import Sidebar from '@/Components/sideBar'
import MainContent from '@/Components/main'
import SearchBar from '@/Components/searchbar'



const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-page">
        <SearchBar/>
        <MainContent />
      </div>

    </div>
  );
};



// ReactDOM.render(<App />, document.getElementById('root'));
export default App
