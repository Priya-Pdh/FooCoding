import React from 'react';





export function TaskList () {


    
        <>
        <h1>Todo List</h1>
        <table>
          <thead>
            <tr>
                <th>Users</th>
                <th>Tasks</th>
                <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map ((task)=> 
            <tr key={task['id']}>
                <td>{task['task']}</td>
              <td> <input type='checkbox' className='' checked={task['status']== 1? true: false} value= {task['id']} onChange= {taskStatus}/>
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
    
}