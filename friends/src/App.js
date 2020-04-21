import React from 'react'
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavbarText
} from 'reactstrap'

function App() {
  return (
    <Router>
      <Navbar color="dark" dark expand="md">
          <Nav className="mr-auto" navbar />
          <NavbarText><Link to='/login'>Login </Link></NavbarText>
          <NavbarText><Link to='/friends'>Friends List</Link></NavbarText>
      </Navbar>
      <Switch>
        <ProtectedRoute path="/friends" component={FriendsList} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App