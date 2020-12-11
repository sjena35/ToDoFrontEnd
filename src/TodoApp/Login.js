import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import SignUp from './SignUp';
import Axios from 'axios';
import {Route,BrowserRouter} from 'react-router-dom' 
import TaskList from './TaskList';


export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open:false,
             email:'',
             password:''
        }
    }

    handler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    onOpenModal = () => {
        this.setState({ open: true });
      };
    
    onCloseModal = () => {
        this.setState({ open: false });
      };

      login=(event)=>{
          event.preventDefault()
          Axios.post('http://localhost:1337/user/login',{email:this.state.email,password:this.state.password}).then(response=>
          this.props.history.push(`/tasklist/${response.data.data.id}`))

        
      }
    
    render() {
        return (
            <div>
              
                <MDBContainer>
                     <MDBRow>
                        <MDBCol md="6">
                            <form>
                                <p className="h5 text-center mb-4">Sign in</p>
                                <div className="grey-text">
                                    <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" onChange={this.handler} name="email" value={this.state.email}/>
                                    <MDBInput label="Type your password" icon="lock" group type="password" validate onChange={this.handler} name="password" value={this.state.password}/>
                                 </div>
                                 <div className="text-center">
                                    <MDBBtn onClick={this.login}>Login</MDBBtn>
                                    <MDBBtn color="success" onClick={this.onOpenModal}>Register</MDBBtn>
                                    <Modal open={this.state.open} onClose={this.onCloseModal}>
                                    <SignUp onCloseModal={()=>this.onCloseModal}/>
                                    </Modal>
                                 
                                 
                                 </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

               

                </div>)
                
        

        }
}

export default Login
