import AcceptTask from "./AcceptTask"
import NewTask from "./NewTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"

function TaskList({data}) {
  return (
    <div 
      id='tasklist' 
      className='h-[50%] flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16 overflow-x-scroll scrollbar-hide'
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      <style jsx>{`
        #tasklist::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />
        }
        return null
      })}
      
    </div>
  )
} 

export default TaskList