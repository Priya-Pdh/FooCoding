import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'
function App() {
  const [name, setName] = useState('');
  const[email, setEmail]= useState('');
  const [user, setUser]= useState([]);

 
  const [taskList, setTaskList] = useState('');
  const [dueDate, setDueDate] = useState(null);
  const [todos, setTodos] = useState([]);

  
 const[itemList, setItemList]= useState('');
  const [status, setStatus]= useState('');
  const[todosItemDetails, setTodsoItemDetails] = useState([]);
  
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
      
    }).then(()=> {
      setTodos([
        ...todos, { taskList: taskList, due_date: dueDate},
      ]);
    });
  };


  function addItems() {
    axios.post('http://localhost:3001/addItems', {
      item_list: itemList,
      status: status,

    }).then(()=> {
      setTodsoItemDetails([
        ...todosItemDetails, { item_list: itemList, status:status},
      ]);
    });
  };
  
  function deleteTodos(id){
   axios.delete(`http://localhost:3001/deleteTodos/${id}`)
   .then((response)=> {
    setTodos(
      todos.filter((value)=> {
        return value.id !== id;
      })
    );
   });
  };

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
      
    </tr>
  </tbody>
</table>
<button onClick={addTodos}>Add Todos Details</button>
<button onClick={deleteTodos}>Delete Todos</button>


{todos.map((value, key)=> {
        return <div >
          <p key ={value.id}>Task List: {value.taskList}</p>
          <p key ={value.id}>Due Date: {value.due_date}</p>
          </div>})};


<table>
  <tr>
  <th>Item List</th>
<th>Done</th>
  </tr>
<tbody>
  <tr>
  <td>
      <input type='text' onChange={(e)=>{setItemList(e.target.value)}}/>
      </td>
      <td>
      <input type='text' onChange={(e)=>{setStatus(e.target.value)}}/>
      </td>
  </tr>
</tbody>
</table>
<button onClick={addItems}>Add Item list</button>
{todosItemDetails.map((value, key)=> {
        return <div >
          <p key ={value.id}>Item List: {value.item_list}</p>
          <p key ={value.id}>Status: {value.status}</p>
          </div>})};


          {/* <label>Task List</label>
      <input type='text' onChange={(e)=>{setTaskList(e.target.value)}}/>
      <label>Item List</label>
      <input type='text' onChange={(e)=>{setItemList(e.target.value)}}/>
      <label>Due Date</label>
      <input type='text' onChange={(e)=>{setDueDate(e.target.value)}}/>
      <label>Done</label>
      <input type='text' onChange={(e)=>{setDone(e.target.value)}}/> */}
     
        
        </div>
               

      })}


      </div>
     
    </>
    
  );
}

export default App;
