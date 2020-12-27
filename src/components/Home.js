import React, {Component} from "react"
import { LoginContext } from "./LoginContext";
import {withRouter} from "react-router-dom"

class Home extends Component
{
    constructor(props)
    {
        super();
        this.state = {}
        fetch("http://localhost:5000/", {
            method: "GET",
            credentials: "include"
        })
        .then(response => response.json())
        .then(data => this.setState(data))
    }

    componentDidMount()
    {
        const {loggedIn} = this.context

        if (!loggedIn)
        {
            this.setState({})
            this.props.history.push("/")
        }
    }

    render()
    {
        return (
            <div className="offset-lg-4 col-lg-4">
                Home
                
            </div>
        )
    }
}

Home.contextType = LoginContext
export default withRouter(Home);