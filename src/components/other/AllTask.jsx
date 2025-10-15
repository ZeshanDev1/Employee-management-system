import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask() {
  const authdata = useContext(AuthContext);

  return (
    <div className="mt-10">
      <h2 className="text-white text-3xl font-bold mb-6">All Employees</h2>
      
      <div 
        className="max-h-[400px] overflow-y-scroll pr-2"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authdata?.employees?.map((elem, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-6 border border-zinc-700 hover:border-emerald-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {elem.firstName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold">{elem.firstName}</h3>
                  <p className="text-gray-400 text-sm">{elem.email}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between bg-zinc-900 rounded-lg p-3 border border-zinc-700">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm font-medium">New Tasks</span>
                  </div>
                  <span className="text-blue-400 font-bold text-lg">{elem.taskSummary.newTask}</span>
                </div>

                <div className="flex items-center justify-between bg-zinc-900 rounded-lg p-3 border border-zinc-700">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm font-medium">Active</span>
                  </div>
                  <span className="text-yellow-400 font-bold text-lg">{elem.taskSummary.active}</span>
                </div>

                <div className="flex items-center justify-between bg-zinc-900 rounded-lg p-3 border border-zinc-700">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm font-medium">Completed</span>
                  </div>
                  <span className="text-green-400 font-bold text-lg">{elem.taskSummary.completed}</span>
                </div>

                <div className="flex items-center justify-between bg-zinc-900 rounded-lg p-3 border border-zinc-700">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm font-medium">Failed</span>
                  </div>
                  <span className="text-red-400 font-bold text-lg">{elem.taskSummary.failed}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-700">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Total Tasks</span>
                  <span className="font-semibold text-emerald-400">
                    {elem.taskSummary.newTask + elem.taskSummary.active + elem.taskSummary.completed + elem.taskSummary.failed}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllTask;