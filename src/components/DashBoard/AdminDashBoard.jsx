import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

function AdminDashBoard(props) {
  return (
    <div className='min-h-screen w-screen bg-zinc-900 p-8'>
      <Header changeUser= {props.changeUser}/>
      <CreateTask></CreateTask>
      <AllTask></AllTask>
      
      
    </div>
  )
}

export default AdminDashBoard