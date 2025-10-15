import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

function CreateTask() {
  const [category, setcategory] = useState('')
  const [tasktitle, settasktitle] = useState('')
  const [taskdesription, settaskdesription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [AssignState, setAssignState] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const authData = useContext(AuthContext);

  const categories = ['Design', 'Development', 'Marketing', 'Testing', 'DevOps', 'Content', 'Analysis', 'Administration', 'Operations', 'IT', 'Support', 'Security', 'Meeting', 'Communication', 'Reporting', 'Optimization']

  const submitHandler = (e) => {
    e.preventDefault()

    const newTask = {
      title: tasktitle,
      description: taskdesription,
      date: taskDate,
      category: category,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    }

    const data = JSON.parse(localStorage.getItem('employees'))

    let taskAssigned = false
    data.forEach(function(elem) {
      if(AssignState === elem.firstName) {
        elem.tasks.push(newTask)
        elem.taskSummary.newTask = elem.taskSummary.newTask + 1
        taskAssigned = true
      }
    })

    if (!taskAssigned) {
      alert('Employee not found! Please select a valid employee.')
      return
    }

    localStorage.setItem('employees', JSON.stringify(data))

    settasktitle('')
    setAssignState('')
    setcategory('')
    settaskdesription('')
    settaskDate('')

    setShowSuccess(true)
    
    setTimeout(() => {
      window.location.reload()
    }, 1500)
  }

  return (
    <div className='max-w-7xl mx-auto mt-8'>
      {showSuccess && (
        <div className='fixed top-5 right-5 bg-emerald-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 animate-fade-in z-50'>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <p className='font-semibold'>Task Created Successfully!</p>
            <p className='text-sm text-emerald-100'>Assigned to {AssignState}</p>
          </div>
        </div>
      )}

      <h1 className='text-white text-4xl font-bold mb-8'>Create New Task</h1>
      
      <form onSubmit={(e) => {
        submitHandler(e)
      }} 
      className='bg-zinc-800 rounded-2xl p-8 shadow-2xl border border-zinc-700'>
        <div className='flex flex-wrap gap-8'>
          
          <div className='flex-1 min-w-[300px] space-y-6'>
            
            <div>
              <h3 className='text-emerald-400 text-lg font-semibold mb-2'>Task Title</h3>
              <input 
                value={tasktitle}
                onChange={(e) => {
                  settasktitle(e.target.value)
                }}
                required
                className='w-full bg-zinc-900 text-white border-2 border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-colors placeholder:text-gray-500' 
                type="text" 
                placeholder='e.g., Design landing page UI' 
              />          
            </div>

            <div>
              <h3 className='text-emerald-400 text-lg font-semibold mb-2'>Date</h3>
              <input 
                value={taskDate}
                onChange={(e) => {
                  settaskDate(e.target.value)
                }}
                required
                className='w-full bg-zinc-900 text-white border-2 border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-colors' 
                type="date" 
              />
            </div>

            <div>
              <h3 className='text-emerald-400 text-lg font-semibold mb-2'>Assign To</h3>
              <select 
                value={AssignState}
                onChange={(e) => {
                  setAssignState(e.target.value)
                }}
                required
                className='w-full bg-zinc-900 text-white border-2 border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-colors cursor-pointer'
              >
                <option value="" disabled>Select Employee</option>
                {authData?.employees?.map((employee, index) => (
                  <option key={index} value={employee.firstName}>
                    {employee.firstName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <h3 className='text-emerald-400 text-lg font-semibold mb-2'>Category</h3>
              <select 
                value={category}
                onChange={(e) => {
                  setcategory(e.target.value)
                }}
                required
                className='w-full bg-zinc-900 text-white border-2 border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-colors cursor-pointer'
              >
                <option value="" disabled>Select Category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

          </div>
          
          <div className='flex-1 min-w-[300px]'>
            <h3 className='text-emerald-400 text-lg font-semibold mb-2'>Description</h3>
            <textarea 
              value={taskdesription}
              onChange={(e) => {
                settaskdesription(e.target.value)
              }}
              required
              className='w-full h-80 bg-zinc-900 text-white border-2 border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-colors resize-none placeholder:text-gray-500' 
              placeholder='Describe the task in detail...'
              cols="30" 
              rows="10"
            ></textarea>
          </div>

        </div>

        <div className='mt-8 flex justify-end'>
          <button 
            className='bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-lg px-12 py-4 rounded-lg transition-colors shadow-lg hover:shadow-emerald-500/50'
            type='submit'
          >
            Create Task
          </button>
        </div>

      </form>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

export default CreateTask