import React, {Component} from "react"

class Register extends Component {

    render ()
    {
        return (
           <div id="content">
               <br/>
               <div>
                   <h5 className="col-md-4 offset-md-4">Register:</h5>
                </div>
               <form>
                   <div>
                    <div className="form-group col-md-4 offset-md-4">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" className="form-control" id="firstname" />
                    </div>
                    <div className="form-group col-md-4 offset-md-4">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" />
                    </div>
                    <div className="form-group col-md-4 offset-md-4">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="form-group col-md-4 offset-md-4">
                        <label htmlFor="confpassword">Confirm Password</label>
                        <input type="password" className="form-control" id="confpassword" />
                    </div>
                    <div className="form-group col-md-4 offset-md-4">
                        <label htmlFor="age">Age</label>
                        <select className="custom-select" id="age">
                            <option value="11-14">11-14</option>
                            <option value="15-18">15-18</option>
                            <option value="19-24">19-24</option>
                            <option value="25-50">25-50</option>
                            <option value="51+">51+</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4 offset-md-4">
                        <label htmlFor="gender">Gender</label>
                        <select className="custom-select" id="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    </div>
                    <div className="offset-md-4 col-md-4">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register