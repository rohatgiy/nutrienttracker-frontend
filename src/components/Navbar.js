import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import {LoginContext} from "./LoginContext"
import History from "./History"
import Home from "./Home"
import Add from "./Add"
import Dashboard from "./Dashboard"
import Register from "./Register"
import Login from "./Login"
import Account from "./Account"

function Navbar()
{
    return (
        <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Nutrient Tracker</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
            
              
              <LoginContext.Consumer>
                {
                  context => 
                  {
                    return context.loggedIn ? (
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                          <Link className="nav-link" to="/add">Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/history">History</Link>
                        </li>
                      </ul>
                    ) : (
                      <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/login">Login</Link>
                      </li>
                      </ul>
                    )
                  }
                }
                </LoginContext.Consumer> 
                <LoginContext.Consumer>
                  {
                    context => {
                      return context.loggedIn ? (
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link className="nav-link" to="/editacc">Account</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/editacc">Logout</Link>
                        </li>
                      </ul>
                      ) : null
                    }
                  }
                </LoginContext.Consumer>
            </div>
        </nav>

        <Switch>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/editacc">
            <Account />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login" component={Login}/>
          <Route path="/">
            <Home name="Yash"/>
          </Route>
        </Switch>
        </Router>
    )
} 

export default Navbar