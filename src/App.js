import React, {Component} from 'react'
import { LoginContext } from "./components/LoginContext";

import './App.css'

import Navbar from "./components/Navbar"


class App extends Component
{
  constructor()
  {
    super()
    this.state = LoginContext
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
