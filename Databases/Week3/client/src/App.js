import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTasks] = useState('');


  function loadTasks() {
    setTasks([]);
    axios.get('http://localhost:4000/tasks/list')
    .then(function(response) {
      setTasks(response['data']);
    });
  }

  function changeNewTask(e) {
    setNewTasks(e.target.value);
  }
  function addTasks() {
    axios.post('http://localhost:4000/tasks/add', { task: newTask})
    .then(function(response) {
      if (response['data']['status'] === 'OK') {
        setNewTasks('');
        loadTasks();
      }
    })
  }
  function deleteTask(e) {
    const id = e.target.value;
    axios.post('http://localhost:4000/tasks/delete', {id: id})
    .then(function(response) {
      if (response['data']['status']==='OK') {
        loadTasks();
      }
    });
  }

  function taskStatus(e){
    const id= e.target.value;
    const status= e.target.checked === true ? 1 : 0;
    axios.post('http://localhost:4000/tasks/status', {id: id, status: status})
    .then(function(response) {
      if(response['data']['status']=== 'OK'){
        loadTasks();
      }
    });
  }
  useEffect(()=> {
    loadTasks();
  }, [])
  return (
    <>
    <h1>Todo List</h1>
        <table>
          <thead>
            <tr>
                <th>Users</th>
                <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map ((task)=> 
            <tr key={task['id']}>
                <td>{task['task']}</td>
              <td> <input type='checkbox' className='' checked={task['status']=== 1? true: false} value= {task['id']} onChange= {taskStatus}/>
               <button className='' value={task['id']} onClick={deleteTask}>Delete</button>
               </td>
            </tr>)}
          </tbody>
          <tfoot>
            <tr>
                <td>
                    <input type='text' className='' value={newTask} onChange={changeNewTask}/>
                </td>
                <td>
                    <button className='' onClick={addTasks}>Add</button>
                </td>
            </tr>
          </tfoot>
        </table>
       
    
    </>
    
  );
}

export default App;
