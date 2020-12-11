import Axios from 'axios'
import React, { Component } from 'react'

export class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userData: []
        }
    }


    activation = (id) => {
        Axios.delete(`http://localhost:1337/user/${id}`).then(res => console.log(res.data))
    }

    componentDidMount() {
        Axios.get('http://localhost:1337/user').then(response => {

            this.setState({ userData: response.data })
        }).catch(error => { console.log("error") })
    }

    render() {

        var User = this.state.userData.map(user => (<tr key={user.id}><td>{user.firstname}</td>

            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.dateOfBirth}</td>
            <td>{user.gender}</td>

            <td><button onClick={() => this.activation(user.id)} className='btn btn-danger'>Delete</button></td></tr>))
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
                            <th>Activation</th>

                        </tr>
                    </thead>
                    <tbody>
                        {User}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default UserList
