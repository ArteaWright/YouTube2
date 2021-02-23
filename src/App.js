import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Sidebar from './components/Sidebar/Sidebar';
import CardBox from './components/CardBox/CardBox';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import {ToggleSidebarContext} from './Helpers/Context'

function App() {
  return (
    <ToggleSidebarContext.Provider>
      <Router>
        <Switch>
          <Home/>
        </Switch>
      <div className="app-page">
        <Sidebar/>
        <CardBox />
      </div>
      {/* 
      <h3>Search Bar</h3>
      <h3>Icon</h3>
      <h4>Card Box Components</h4>
      <h4>Contact Link</h4> */}
      </Router>
    </ToggleSidebarContext.Provider>
    
  );
}

export default App;
