import React, {Component} from "react"

class Home extends Component
{
    constructor(props)
    {
        super();
    }

    render()
    {
        return (
            <div className="offset-lg-4 col-lg-4">
                <br />
                <p>Hello, {this.props.name}!</p>
                
            </div>
        )
    }
}

export default Home