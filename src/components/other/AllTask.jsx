 import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask() {
  const authdata = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">

       
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium  w-1/5">Name</h2>
        <h3 className="text-lg font-medium  w-1/5">Task</h3>
        <h5 className="text-lg font-medium w-1/5  ">Completed</h5>
        <h5 className="text-lg font-medium w-1/5  ">Accepted</h5>
        <h5 className="text-lg font-medium w-1/5  ">Failed</h5>
      </div>

 
      <div>
        {authdata?.employees?.map((elem, index) => (
          <div
            key={index}
            className=" border-2 border-emerald-200 mb-2 py-2 px-4 flex justify-between rounded"
          >
            <h2 className="text-lg font-medium w-1/5  text-white">{elem.firstName}</h2>
            <h3 className="text-lg font-medium w-1/5 text-blue-400">{elem.taskSummary.newTask}</h3>
            <h5 className="text-lg font-medium w-1/5 text-yellow-400">{elem.taskSummary.completed}</h5>
            <h5 className="text-lg font-medium  w-1/5 text-white">{elem.taskSummary.active}</h5>
            <h5 className="text-lg font-medium w-1/5 text-red-500">{elem.taskSummary.failed}</h5>
          </div>
        ))}
      </div>

    </div>
  );
}

export default AllTask;
