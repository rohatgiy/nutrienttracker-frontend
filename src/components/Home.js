import React, {Component} from "react"

class Home extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
        <p>Hello, {this.props.name}!</p>
        )
    }
}

export default Home