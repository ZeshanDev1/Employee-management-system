import React from "react";
import { useState } from "react";


function Login({handleLogin}) {
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');

    const formHandler = (e)=>{
        e.preventDefault();
        handleLogin(email,pass)
        console.log("Form Submited Successfully and mail is ",email , "pasword is ", pass);
    }
  return (
    <div className="flex items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600">
        <form onSubmit={(e)=>{
            formHandler(e);

        }} className="flex flex-col items-center justify-center p-20">

          <input required
          value={email}
          onChange={(e)=>{
            setemail(e.target.value);
          }}
            className="text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter Your email"
          />
          <input 
          value={pass}
          onChange={(e)=>{
            setpass(e.target.value);
          }}         
            type="password"
            placeholder="Enter your password"
            className=" text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-gray-400 mt-4"
          />
          <button className="mt-4 text-white outline-none border-none bg-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-white ">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
