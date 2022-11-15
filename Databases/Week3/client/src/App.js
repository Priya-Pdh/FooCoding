import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'
function App() {
  const [name, setName] = useState('');
  const[email, setEmail]= useState('');
  const [user, setUser]= useState([]);

 
  const [taskList, setTaskList] = useState('');
  const [dueDate, setDueDate] = useState(null);
 const[itemList, setItemList]= useState('');
const [status, setStatus]= useState('');

  const [todos, setTodos] = useState([]);

  
  function addUser(){
    axios.post('http://localhost:3001/addUser', {
      name:name, 
      email:email,
    }).then(()=> {
      setUser([
        ...user, { name:name, email:email},
      ]);
    });
  };

  const getUser= ()=> {
   axios.get('http://localhost:3001/getUser')
   .then((response)=> {
    setUser(response.data);
   })
  };

  

  function addTodos(){
    axios.post('http://localhost:3001/addTodos', {
      
      taskList:taskList, 
      due_date: dueDate,
      item_list: itemList,
      status: status,
      
    }).then(()=> {
      setTodos([
        ...todos, { taskList: taskList, due_date: dueDate, item_list: itemList, status:status},
      ]);
    });
  };


  // function deleteTodos() {
  //   axios.post('http://localhost:3001/deleteTodos', {

  //   }).then(()=> {
  //     setTodsoItemDetails([
  //       ...todosItemDetails, { item_list: itemList, status:status},
  //     ]);
  //   });
  // };
  

  return (
    <>
    <h1>Users</h1>
      <label>Name</label>
      <input type='text' onChange={(e)=>{setName(e.target.value)}}/>
      <label>Email</label>
      <input type='text' onChange={(e)=>{setEmail(e.target.value)}}/>
      <button onClick={addUser}>Add User</button>
      <hr/>
      <div className='userContainer'>
      <button onClick={getUser}>Show users</button>
      {user.map((value, key)=> {
        return <div >
          <p key ={value.id}>Name: {value.name}</p>
          <p key ={value.id}>Email: {value.email}</p>

<table>
  <thead>
    <tr>
      <th>Task List</th>
      <th>Due Date</th>
      <th>Item List</th>
      <th>Done</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
      <input type='text' onChange={(e)=>{setTaskList(e.target.value)}}/>
      </td>
      <td>
      <input type='text' onChange={(e)=>{setDueDate(e.target.value)}}/>
      </td>
      <td>
      <input type='text' onChange={(e)=>{setItemList(e.target.value)}}/>
      </td>
      <td>
      <input type='text' onChange={(e)=>{setStatus(e.target.value)}}/>
      </td>
    </tr>
  </tbody>
</table>
<button onClick={addTodos}>Add Todos Details</button>

{todos.map((value, key)=> {
        return <div >
          <p key ={value.id}>Task List: {value.taskList}</p>
          <p key ={value.id}>Due Date: {value.due_date}</p>
          <p key ={value.id}>Item List: {value.item_list}</p>
          <p key ={value.id}>Status: {value.status}</p>
          </div>})};
        </div>
               

      })}


      </div>
     
    </>
    
  );
}

export default App;
