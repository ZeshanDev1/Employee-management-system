import React from 'react'

function FailedTask({data}) {
  return (
    <div className='flex-shrink-0 w-[350px] h-[200px] bg-red-400 p-4 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
      </div>
      <div className='mt-4 text-xl font-semibold'>{data.title}</div>
      <p className='text-sm mt-2'>
        {data.description}
      </p>

      <div className='flex justify-between mt-4'>
        <button className='bg-red-700 px-2 py-1 text-sm rounded cursor-default'>
          ✗ Failed
        </button>
      </div>
    </div>
  )
}

export default FailedTask