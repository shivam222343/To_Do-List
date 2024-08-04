import { useState } from 'react'
import './App.css'
import { FaBeer } from 'react-icons/fa';

function App() {

  const [taskbar, settaskbar] = useState([])
  const [discription, setdiscription] = useState("")
  const [title, settitle] = useState("")
  const [delet, setdelet] = useState("")

  const submitHandller = (e) => {
    e.preventDefault()
    if(title != "")
    {
    settaskbar([...taskbar,{title,discription}])
    settitle("")
    setdiscription("")
    }
  }


  const deleteHandler = (index) => {
    const newTaskbar = taskbar.filter((task, i) => i !== index)
    settaskbar(newTaskbar)
  }

  const deleteAll = (index) =>{
    const newTaskbar = taskbar.filter((_, i) => i !== index)
    settaskbar([])
    
  }
  

  
  
   
   let renderTask = taskbar.map((t,i)=>{
    return(
      <div className='p-3 hover:bg-zinc-800 duration-500 rounded-lg text-zinc-300 mt-3 flex justify-between items-center bg-zinc-700'>

        <div className='flex flex-col gap-1'>
          <div className='flex gap-10 justify-between p-2'>
          <h1 className='font-bold text-green-500 '>{t.title}</h1>
         <div className='flex gap-2'>
          <h1 className='text-sky-400'>Comleted</h1>
          <input  type="checkbox" name="" id="" />
         </div>
          </div>
        <p>{t.discription}</p>
        <button onClick={() => deleteHandler(i)} className='bg-red-600 mt-2 max-h-28 px-3 hover:animate-pulse flex justify-center items-center p-1 rounded-lg hover:bg-red-700 duration-200'>Delete Task <FaBeer className='ml-3 font-bold text-blue-900' /></button>      </div>
        </div>
  )

})
  return (

    <body className='min-h-[100vh] bg-black w-[100vw] p-10 sm:grid-col-12 gap-2 grid-cols-12 flex  justify-center items-center'>
      <div className="b1 h-[80vh] w-full hidden sm:block rounded-xl bg-zinc-800"></div>
      <div className="b1 min-h-[80vh] w-full gap-3 rounded-xl bg-zinc-600 flex flex-col text-white items-center">
        <h1 className='font-bold text-xl font-mono mt-2'>To Do List</h1>
        <form onSubmit={submitHandller} className='mt-4 flex-col flex gap-2'>
          <input className='border-none text-zinc-200 p-1 px-3 w-80 rounded-md bg-black' type="text"
            placeholder='Enter Your New Task '
            value={title}
            onChange={(e) => {
              settitle(e.target.value)
            }}
          />
          <input className='border-none text-zinc-200 p-1 px-3 w-80 rounded-md bg-black' type="text"
            placeholder='Enter Your discription (optional) '
             value={discription}
             onChange={(e)=>{
              setdiscription(e.target.value)
             }}
          />
          <button className='bg-green-400 inline-block rounded-md font-bold hover:bg-green-600 duration-200 p-1 px-3'><h1>Add Task</h1></button>
        </form>
       <div className="h-[1px] w-full bg-slate-300"></div>
       <div className='flex justify-end w-80'>
       <button onClick={(index)=>{deleteAll()}} className='text-red-500 border-2 p-1 px-3 rounded-lg hover:text-red-600 duration-500 border-red-900 hover:border-red-500 '>Delete All</button>
       </div>
        <div className='p-3 w-80 rounded-md '>
          <ul>
          {renderTask}
          </ul>
        </div>
      </div>
      
      <div className="b1 h-[80vh] w-full lg:block hidden rounded-xl bg-zinc-800"></div>

    </body>

  )
}

export default App
