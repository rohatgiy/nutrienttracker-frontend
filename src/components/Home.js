import React, {Component} from "react"

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

    render()
    {
        return (
            <div className="offset-lg-4 col-lg-4">
                <br />
                <p>Hello, {this.state.firstname}!</p>
                
            </div>
        )
    }
}

export default Home