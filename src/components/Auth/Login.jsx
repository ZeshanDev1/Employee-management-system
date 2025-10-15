import React from "react";
import { useState } from "react";

function Login({handleLogin}) {
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');

    const formHandler = (e)=>{
        e.preventDefault();
        handleLogin(email,pass)
        setemail('')
        setpass('')
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 p-4">
      <div className="w-full max-w-md">
        
        <div className="text-center mb-8">
          <div className="inline-block relative mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/50 transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="absolute inset-0 bg-white opacity-10 rounded-2xl"></div>
              <svg className="w-10 h-10 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-gray-900">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Employee Management
          </h1>
          <p className="text-emerald-400 text-lg font-medium">System</p>
          <p className="text-gray-400 mt-2">Sign in to continue to your dashboard</p>
        </div>

        <div className="bg-zinc-800 rounded-2xl shadow-2xl border border-zinc-700 overflow-hidden">
          <div className="p-8">
            <form onSubmit={(e)=>{
                formHandler(e);
            }} className="space-y-6">

              <div>
                <label className="block text-emerald-400 text-sm font-semibold mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input 
                    required
                    value={email}
                    onChange={(e)=>{
                      setemail(e.target.value);
                    }}
                    className="w-full bg-zinc-900 text-white border-2 border-zinc-700 rounded-lg pl-12 pr-4 py-3 outline-none focus:border-emerald-500 transition-colors placeholder:text-gray-500"
                    type="email"
                    placeholder="admin@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-emerald-400 text-sm font-semibold mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input 
                    required
                    value={pass}
                    onChange={(e)=>{
                      setpass(e.target.value);
                    }}
                    type="password"
                    placeholder="Enter your password"
                    className="w-full bg-zinc-900 text-white border-2 border-zinc-700 rounded-lg pl-12 pr-4 py-3 outline-none focus:border-emerald-500 transition-colors placeholder:text-gray-500"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-lg py-3 rounded-lg transition-all shadow-lg hover:shadow-emerald-500/50 transform hover:scale-[1.02]"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          © 2025 Employee Management System. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;