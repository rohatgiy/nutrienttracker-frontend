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
                    <div class="form-group col-md-4 offset-md-4">
                        <label for="firstname">First Name</label>
                        <input type="text" class="form-control" id="firstname" />
                    </div>
                    <div class="form-group col-md-4 offset-md-4">
                        <label for="username">Userame</label>
                        <input type="text" class="form-control" id="username" />
                    </div>
                    <div class="form-group col-md-4 offset-md-4">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" />
                    </div>
                    <div class="form-group col-md-4 offset-md-4">
                        <label for="confpassword">Confirm Password</label>
                        <input type="password" class="form-control" id="confpassword" />
                    </div>
                    <div class="form-group col-md-4 offset-md-4">
                        <label for="age">Age</label>
                        <select class="custom-select" id="age">
                            <option value="11-14">11-14</option>
                            <option value="15-18">15-18</option>
                            <option value="19-24">19-24</option>
                            <option value="25-50">25-50</option>
                            <option value="51+">51+</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4 offset-md-4">
                        <label for="gender">Gender</label>
                        <select class="custom-select" id="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    </div>
                    <div class="offset-md-4 col-md-4">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register