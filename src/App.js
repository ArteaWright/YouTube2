import './App.css';
import Home from './Pages/Home';
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div>
      <Home/>
      <div className="app-page">
        <Sidebar/>
      </div>
      {/* <h2>Hamburger Menu</h2>
      <h2>Logo</h2>
      <h3>Search Bar</h3>
      <h3>Icon</h3>
      <h4>Card Box Components</h4>
      <h4>Contact Link</h4> */}
    </div>
  );
}

export default App;
