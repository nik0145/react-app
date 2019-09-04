import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import WeatherApp from "./components/weatherApp/weatherApp";
import List from "./components/List/list";
function App() {
  return (
    <div className="App">
    <Router>
    <h2>Nav</h2>  
    <header className="App-header">
      <ul>
      <li>
        <Link to="/" >Home</Link>
      </li>
      <li>
        <Link to="/weather">Weather</Link>
      </li>
      <li>
      <Link to="/todo">Todo list</Link>
    </li>
      </ul>  
    </header>
    <Route exact path ="/" component={Home}></Route>
    <Route exact path ="/weather" component={WeatherApp}></Route>
    <Route exact path ="/todo" component={List}></Route>
      </Router>
    </div>
  );
}

export default App;
