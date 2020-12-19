import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import History from "./History"
import Home from "./Home"
import Add from "./Add"
import Dashboard from "./Dashboard"
import Register from "./Register"

function Navbar()
{
    return (
        <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand"><Link class="navbar-brand" to="/">Nutrient Tracker</Link></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link"><Link class="nav-link" to="/add">Add</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><Link class="nav-link" to="/dashboard">Dashboard</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><Link class="nav-link" to="/history">History</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><Link class="nav-link" to="/register">Register</Link></a>
                </li>

                </ul>
            </div>

            <form class="form-inline my-2 my-lg-0">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link">Logout</a>
                </li>
              </ul>
            </form>
        </nav>

        <Switch>
          <Route path="/history">
            <History />
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
          <Route path="/">
            <Home name="Yash"/>
          </Route>
        </Switch>
        </Router>
    )
} 

export default Navbar