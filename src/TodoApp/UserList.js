import Axios from 'axios'
import React, { Component } from 'react'

export class UserList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userData:[]
        }
    }

    update=()=>{

    }

    delete=()=>{

    }

    componentDidMount(){
        Axios.get('http://localhost:1337/user').then(response => {
            console.log(response.data)
            this.setState({ taskData: response.data })
        }).catch(error => { console.log("error") })
    }
    
    render() {

        var User=this.state.taskData.map(user => (<tr key={user.id}><td>{user.firstname}</td>
                    
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.dateOfBirth}</td>
            <td>{user.gender}</td>
            <td><button className='btn btn-success' onClick={()=>this.update(user)}>Edit</button></td>
            <td><button onClick={() => this.delete(user.id)} className='btn btn-danger'>Delete</button></td></tr>))
        return (
            <div>


                <table className="table table-bordered">
                    <thead className="thead-dark">
                    <tr>
                        <th>FirstName</th>
                    
                        <th>LastName</th>
                        <th>Email</th>
                        <th>DateOfBirth</th>
                        <th>Gender</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Task}
                        </tbody>
                </table>

            </div>
        )
    }
}

export default UserList
