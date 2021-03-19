import './App.css';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="background">
      {/* <Home/> */}
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/contact" component={ContactUs}></Route>
          </Switch>
        </Router>

      </>
    </div>
  );
}

export default App;
