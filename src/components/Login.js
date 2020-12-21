import React, {Component} from "react"

class Login extends Component
{
    render()
    {
        return(
            <div id="content">
               <br/>
               <div>
                   <h5 className="col-md-4 offset-md-4">Login:</h5>
                </div>
               <form>
                   <div>
                    <div className="form-group col-md-4 offset-md-4">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" />
                    </div>
                    <div className="form-group col-md-4 offset-md-4">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    </div>
                    <div className="offset-md-4 col-md-4">
                        <button type="submit" className="btn btn-primary">Log In</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login