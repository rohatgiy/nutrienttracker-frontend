import React, {Component} from "react"
import {LoginContext} from "./LoginContext"
import {withRouter} from "react-router-dom"
import {
    RadialBarChart, RadialBar, PolarAngleAxis
} from 'recharts';
import ReactTooltip from "react-tooltip"
import FoodItem from "./FoodItem"

var empty = true;

class Dashboard extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            entry:{
                food_names: [],
                date: new Date()
            },
            data: []
        }
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this)
        fetch("http://localhost:5000/dashboard",
        {
            method: "GET",
            credentials: "include"
        })
        .then(response => response.json())
        .then(data => {
            
            const nuts = [];
            for (let i = 0; i < data.entry.nutrients.length; ++i)
            {
                let den = 1;
                let name;
                let temp = "";

                for (name in data.reqs)
                {
                    if (name === data.entry.nutrients[i].nutrient)
                    {  
                        temp = name
                    }
                }

                den = data.reqs[temp]
                let frac = (data.entry.nutrients[i].amount/den)

                if (frac >= 1)
                {
                    nuts.push(
                        [{
                            fill: '#5cb85c',
                            dec: frac,
                            name: data.entry.nutrients[i].nutrient
                        }]
                    )
                }
                else 
                {
                    nuts.push(
                        [{
                            fill: '#d9534f',
                            dec: frac,
                            name: data.entry.nutrients[i].nutrient
                        }]
                    )
                }
            }
            return this.setState(data, () => 
            {
                empty = data.entry.food_names.length === 0

                return this.setState({data: nuts})
            })
        })
        
    }

    componentDidMount()
    {
        const {loggedIn} = this.context

        if (!loggedIn)
        {
            this.props.history.push("/")
        }
    }

    rerenderParentCallback()
    {
        console.log("fired")
        fetch("http://localhost:5000/dashboard",
        {
            method: "GET",
            credentials: "include"
        })
        .then(response => response.json())
        .then(data => {
            
            const nuts = [];
            for (let i = 0; i < data.entry.nutrients.length; ++i)
            {
                let den = 1;
                let name;
                let temp = "";

                for (name in data.reqs)
                {
                    if (name === data.entry.nutrients[i].nutrient)
                    {  
                        temp = name
                    }
                }

                den = data.reqs[temp]
                let frac = (data.entry.nutrients[i].amount/den)

                if (frac >= 1)
                {
                    nuts.push(
                        [{
                            fill: '#5cb85c',
                            dec: frac,
                            name: data.entry.nutrients[i].nutrient
                        }]
                    )
                }
                else 
                {
                    nuts.push(
                        [{
                            fill: '#d9534f',
                            dec: frac,
                            name: data.entry.nutrients[i].nutrient
                        }]
                    )
                }
            }
            return this.setState(data, () => 
            {
                empty = data.entry.food_names.length === 0

                this.setState({data: nuts})
            })
        })
    }

    render ()
    {
        return !empty ? (
            <div>
                <div className="offset-md-4 col-md-4">
                    <br />
                    <h2>Today, you ate:</h2>   
                </div>
                <br/>
                <div className="card offset-md-2 col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{this.state.entry.date.toString().substring(0, 10)}</h4>
                        <div className="row">
                            <div className="col-4">
                                <h5 className="text-muted">Foods:</h5>
                                {this.state.entry.food_names.map((item, index) => <FoodItem name={item} index={index} rerenderParentCallback={this.rerenderParentCallback}/>)}
                            </div> 
                            <div className="col-8">
                                <h5 className="text-muted">Nutrients:</h5>
                                <div className="row">
                                {this.state.data.map((item) => 
                                {
                                    return (
                                    <div style={{textAlign: "center", margin: "5px", width: "100px"}}>
                                        
                                        <p data-tip={"" + (item[0].dec*100).toFixed(2) + "% of daily requirements"}>
                                            <RadialBarChart width={100} height={100} cx={50} cy={50} innerRadius={30} barSize={30} data={item}>
                                                <PolarAngleAxis type="number" domain={[0, 1]} angleAxisId={0} tick={false} />
                                                <RadialBar background dataKey="dec" angleAxisId={0} clockWise={true}/>
                                            </RadialBarChart>
                                        </p>
                                        <ReactTooltip />
                                        <text>{item[0].name}</text>
                                    </div>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div>
                <div className="offset-md-4 col-md-4">
                    <br />
                    <h2>Today, you ate:</h2>
                    <br />
                    <p>You haven't eaten anything today!</p>   
                    <a href="/add">Click to add foods</a>
                </div>
            </div>
        )
    }
}

Dashboard.contextType = LoginContext
export default withRouter(Dashboard)