import Axios from 'axios'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import React, { Component } from 'react'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            cpassword: '',
            gender: "male",
            dateOfBirth: ''
        }
    }

    handler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    register = (event) => {

        event.preventDefault()
        let obj = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender,
            dateOfBirth: this.state.dateOfBirth
        }


        Axios.post('http://localhost:1337/user/register', obj).then(Response => console.log(Response))
        alert("registered successfully")

        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            cpassword: '',
            gender: "male",
            dateOfBirth: ''
        })
    }



    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form onSubmit={this.register}>
                            <p className="h5 text-center mb-4">Sign in</p>
                            <label>First Name:</label><br />
                            <input type="text" label="First Name" pattern="[a-zA-Z]{3,}" name="firstname" value={this.state.firstname} onChange={this.handler} /><br />

                            <label>Last Name:</label><br />
                            <input type="text" name="lastname" pattern="[a-zA-Z]{2,}" value={this.state.lastname} onChange={this.handler} /><br />

                            <label>Email:</label><br />
                            <input type="email" name="email" value={this.state.email} onChange={this.handler} /><br />

                            <label>Password:</label><br />
                            <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name="password" value={this.state.password} onChange={this.handler} /><br />

                            <label>Confirm Password:</label><br />
                            <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name="cpassword" value={this.state.cpassword} onChange={this.handler} /><br />
                            <label>Gender:</label><br />
                            <select name="gender" onChange={this.handler}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select><br />

                            <label>Date Of Birth</label><br />
                            <input type="date" name="dateOfBirth" onChange={this.handler} /><br />

                            <MDBBtn type="submit">Register</MDBBtn>
                        </form>



                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default SignUp


