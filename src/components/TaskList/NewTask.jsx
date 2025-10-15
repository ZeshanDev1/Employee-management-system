import React from 'react'

function NewTask({data}) {
  
  const handleAccept = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    
    employees.forEach((emp) => {
      if (emp.id === loggedInUser.data.id) {
        emp.tasks.forEach((task) => {
          if (task.title === data.title && task.date === data.date) {
            task.newTask = false
            task.active = true
            emp.taskSummary.newTask -= 1
            emp.taskSummary.active += 1
          }
        })
      }
    })
    
    localStorage.setItem('employees', JSON.stringify(employees))
    
    
    const updatedEmployee = employees.find(emp => emp.id === loggedInUser.data.id)
    loggedInUser.data = updatedEmployee
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
    
    window.location.reload()
  }

  return (
    <div className='flex-shrink-0 w-[350px] h-[200px] bg-yellow-400 p-4 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
      </div>
      <div className='mt-4 text-xl font-semibold'>{data.title}</div>
      <p className='text-sm mt-2'>
        {data.description}
      </p>

      <div className='flex justify-between mt-4'>
        <button 
          onClick={handleAccept}
          className='bg-green-500 hover:bg-green-600 px-2 py-1 text-sm rounded transition'
        >
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask