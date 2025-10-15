import React from 'react'

function Header(props) {
  
  const LogOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  
  const username = props.data ? props.data.firstName : 'Admin'
   
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br /> 
        <span className='text-3xl font-semibold'>{username}✋</span>
      </h1>
      <button 
        onClick={LogOutUser} 
        className='bg-red-600 hover:bg-red-700 text-lg font-medium text-white py-3 px-5 rounded-sm transition'
      >
        Log out
      </button>
    </div>
  )
}

export default Header