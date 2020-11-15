import React, {Component} from "react"

class Home extends Component {
    constructor(props)
    {
        super(props);
    }

    render ()
    {
        return (
            <div>
                <p>Hello, {this.props.name}!</p>
            </div>
        )
    }
}

export default Home