import Axios from 'axios'
import React, { Component } from 'react'

export class TaskList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            taskData: [],
            tname: '',
            desc: '',
            id: '',
            flag: false,
            userId: ''

        }
    }

    delete = (id) => {
        console.log(id)

        Axios.delete(`http://localhost:1337/task/${id}`).then(res => console.log(res.data))
    }

    handler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submit = (e) => {
        e.preventDefault()

        if (this.state.flag == false) {
            let obj = { taskname: this.state.tname, status: 'pending', description: this.state.desc, userId: this.props.match.params.id }

            Axios.post('http://localhost:1337/task', obj).then(response => {
                console.log(response)
            })

            this.setState({ tname: '', desc: '' })
        }

        else {

            console.log(this.state.id)
            let obj = { taskname: this.state.tname, status: 'pending', description: this.state.desc, userId: this.state.userId }
            Axios.put(`http://localhost:1337/task/${this.state.id}`, obj).then(response => console.log(response.data))
            this.setState({ flag: false, id: '', tname: '', desc: '' })
        }
    }

    update = (task) => {
        console.log(task)
        this.setState({ tname: task.taskname, desc: task.description, id: task.id, flag: true, userId: task.userId })
    }




    componentDidMount() {

        this.getDate()
    }

    getDate = () => {

        Axios.get('http://localhost:1337/task').then(response => {
            this.setState({ taskData: response.data })
        }).catch(error => { console.log("error") })
    }

    componentDidUpdate(prevState, prevProps) {
        if (prevState.taskData !== this.state.taskData) {
            this.componentDidMount()
        }
    }
    render() {


        var Task = this.state.taskData.map(task => (<tr key={task.id}><td>{task.taskname}</td>

            <td>{task.description}</td>
            <td><button className='btn btn-success' onClick={() => this.update(task)}>Edit</button></td>
            <td><button onClick={() => this.delete(task.id)} className='btn btn-danger'>Delete</button></td></tr>))

        return (
            <div>

                <form>
                    Title:<input type='text' onChange={this.handler} name="tname" value={this.state.tname} />
                    Description:<input type='text' onChange={this.handler} name="desc" value={this.state.desc} />
                    <br />
                    {(this.state.flag) ? <button onClick={this.submit} className="btn btn-success">Update</button> : <button className="btn btn-primary" onClick={this.submit}>Submit</button>}
                </form>
                <br />


                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Title</th>

                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
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

export default TaskList