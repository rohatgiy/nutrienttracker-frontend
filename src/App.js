import React, {Component} from 'react'
import { LoginContext } from "./components/LoginContext";

import './App.css'

import Navbar from "./components/Navbar"


class App extends Component
{
  toggleLogin = loggedIn =>
  {
    this.setState({loggedIn: loggedIn})
  }
  constructor()
  {
    super()
    this.state = {
      loggedIn: false,
      toggleLogin: this.toggleLogin
    }
  }
  render ()
  {
    return (
    <LoginContext.Provider value={this.state}>
    <div>
      <Navbar />
    </div>
    </LoginContext.Provider >
    )
  }
}


export default App;
