import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

function AuthProvider({children}) {
  const [userData, setuserData] = useState(null)

  useEffect(() => {
    
    const existingData = localStorage.getItem('employees')
    if (!existingData) {
      setLocalStorage();
    }

    const {employees, admin} = getLocalStorage()
    setuserData({employees, admin})
  }, [])

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider