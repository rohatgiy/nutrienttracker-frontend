import React, {Component} from "react"
import Search from "./Search"
import { foodData } from "../foods_data"
import {withRouter} from "react-router-dom"

class Add extends Component
{
    render ()
    {
        return(
            <div>
                <br/>
               <div className="form-group col-md-4 offset-md-4">
                   <h5>Add a food:</h5>
                </div>
                <Search data={foodData}/>
                
            </div>
        )
    }
}

export default withRouter(Add)