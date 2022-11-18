import "./App.css";
import { useState } from "react";
import axios from "axios";
import {FaRegCalendarAlt} from 'react-icons/fa';

function App() {
  const [userName, setUserName] = useState("");
  const [taskList, setTaskList] = useState("");
  const [itemList, setItemList] = useState("");
  const [status, setStatus] = useState("");
  const [dueDate, setDueDate] = useState(null);

  const [todos, setTodos] = useState([]);

  const getTodoList = () => {
    axios.get("http://localhost:3001/getTodos").then((response) => {
      setTodos(response.data);
    });
  };

  function addTodos() {
    axios
      .post("http://localhost:3001/addtodos", {
        user_name: userName,
        todo_list: taskList,
        item_list: itemList,
        status: status,
        due_date: dueDate,
      })
      .then(() => {
        setTodos([
          ...todos,
          {
            user_name: userName,
            todo_list: taskList,
            item_list: itemList,
            status: status,
            due_date: dueDate,
          },
        ]);
      });
  }


  function deleteTodos(id) {
    console.log(id);
    axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      getTodoList();
    });
  }

  return (
    <>
    <div className="main-container">
      <h1> ROUTINE PLANNER <FaRegCalendarAlt/></h1> 
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Task List</th>
            <th>Item List</th>
            <th>Status</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setTaskList(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setItemList(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setDueDate(e.target.value);
                }}
              />
            </td>
            <td>
              <button onClick={addTodos}>Add Todos</button>
            </td>
            <td>
              <button onClick={getTodoList}>Show List</button>
            </td>
          </tr>
        </tbody>
      </table>
     

      <div className="todoContainer">
        {todos.map((value, key) => {
          return (
            <div className="todosWrapper">
              <table className="table">
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Task List</th>
                    <th>Item List</th>
                    <th>Status</th>
                    <th>Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p key={key}>{value.user_name}</p>
                    </td>
                    <td>
                      <p key={key}>{value.todo_list}</p>
                    </td>
                    <td>
                      <p key={key}>{value.item_list}</p>
                    </td>
                    <td>
                      <p key={key}>{value.status}</p>
                    </td>
                    <td>
                      <p key={key}>{value.due_date}</p>
                    </td>

                    <td>
                      <button
                      className="del-button"
                        onClick={() => {
                          deleteTodos(value.id);
                          key = { key };
                        }}
                      >
                        Delete Todos
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
      </div>
      
    </>
  );
}

export default App;
