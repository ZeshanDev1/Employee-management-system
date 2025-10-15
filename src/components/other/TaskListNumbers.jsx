function TaskListNumbers({data}) {
  return (
    <div className='flex justify-between gap-5 mt-10'>
      <div className='w-[23%]   p-6 bg-red-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{data.taskSummary.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[23%] p-6 bg-blue-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{data.taskSummary.active}</h2>
        <h3 className='text-xl font-medium'>In Progress</h3>
      </div>
      <div className='w-[23%] p-6 bg-green-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{data.taskSummary.completed}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>
      <div className='w-[23%] p-6 bg-yellow-400 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{data.taskSummary.failed}</h2>
        <h3 className='text-xl font-medium'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers