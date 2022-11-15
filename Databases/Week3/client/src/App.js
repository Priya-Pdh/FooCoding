import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'
function App() {
  const [name, setName] = useState('');
  const[email, setEmail]= useState('');
  const [user, setUser]=useState([]);

  function addUser(){
    axios.post('http://localhost:3000/addUser', {
      name:name,
      email:email,
    }).then(()=> {
      setUser([
        ...user, { name:name, email:email},
      ]);
    });
  };

  const displarInput= ()=> {
    console.log(name + email);
  };
  return (
    <>
    <h1>Users</h1>
      <label>Name:</label>
      <input type='text' onChange={(e)=>{setName(e.target.value)}}/>
      <label>Email:</label>
      <input type='text' onChange={(e)=>{setEmail(e.target.value)}}/>
      <button onClick={displarInput}>Add User</button>
    </>
    
  );
}

export default App;
