import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashBoard from "./components/DashBoard/EmployeeDashBoard";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setuser] = useState(null);
  const [loggedInUserdata, setloggedInUserdata] = useState(null);

  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      
      const userData = JSON.parse(loggedInUser);
      setuser(userData.role);
      setloggedInUserdata(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setuser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        setuser("employee");
        setloggedInUserdata(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <div className="min-h-screen min-w-full bg-black text-white flex items-center justify-center">
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && <AdminDashBoard changeUser={setuser} />}

      {user === "employee" && <EmployeeDashBoard changeUser={setuser} data={loggedInUserdata} />}
    </div>
  );
}

export default App;
