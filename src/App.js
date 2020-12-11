import logo from './logo.svg';
/* import './App.css';
 */
import TaskList from './TodoApp/TaskList';
import { SignUp } from './TodoApp/SignUp';
import Login from './TodoApp/Login';

import {Route,BrowserRouter} from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path='/' component={Login}></Route>
      <Route path='/tasklist/:id' component={TaskList}></Route>
      
      </BrowserRouter>
     {/* <TaskList/> */} 
    {/*  <SignUp/> */}
   

    </div>
  );
}

export default App;
