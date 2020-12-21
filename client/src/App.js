import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Search from './components/Search';
import Navbar from './components/CustomNavbar';

function App() {
  return (
    <Router>
        <Navbar />
        <Container>
          <Link to='/search'>Search</Link>
          <Switch>
            <Route path='/search'>
              <Search />
            </Route>
          </Switch>
        </Container>
    </Router>
  );
}

export default App;
