import logo from './logo.svg';
/* import './App.css';
 */
import TaskList from './TodoApp/TaskList';
import { SignUp } from './TodoApp/SignUp';
import Login from './TodoApp/Login';

import { Route, BrowserRouter } from 'react-router-dom'
import UserList from './TodoApp/UserList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Login}></Route>
        <Route path='/tasklist/:id' component={TaskList}></Route>
        <Route path='/userlist' component={UserList}></Route>
      </BrowserRouter>



    </div>
  );
}

export default App;
