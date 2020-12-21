import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Home page</h1>
        <Link to='/search'>Search</Link>
        <Switch>
          <Route path='/search'>
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
