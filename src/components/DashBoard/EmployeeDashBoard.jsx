import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

 

function EmployeeDashBoard(props) {
  return (
    <div className='p-10 bg-[#1C1C1C] min-h-screen w-screen'>
     
      <Header changeUser={props.changeUser} data = {props.data}/>
      <TaskListNumbers data = {props.data} />
      <TaskList data = {props.data}  />
    </div>
  )
}


export default EmployeeDashBoard