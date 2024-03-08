"use client"
import React,{useState} from 'react'

const TodoList = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}])
    settitle("")
    setdesc("")
    console.log(mainTask)
  }

  let renderTask = <h2 className='pl-5 text-md'>No Task Available</h2>

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)

    setmainTask(copytask)
  }

  if (mainTask.length>0) {
    renderTask = mainTask.map((t,i) => {
      return (
        <li className='flex justify-between mb-5 '>
          <h2 className='font-xl font-semibold '>{t.title}</h2>
          <h3 className='font-xl font-semibold '>{t.desc}</h3>

          <button  
          onClick={ () => {
            deleteHandler(i)
          }}
          className='font-lg bg-red-500 px-3 py-2 text-white rounded'>
            Delete Task
          </button>
        </li>
      )
  })
  }

  return (
   <>
   <h1 className='bg-black text-white text-center py-5 text-2xl '>Todo-list App</h1>

   <form className='flex justify-center gap-6  mt-9 mb-7' onSubmit={submitHandler}>
    <input 
    type='text'
    className='m-3 border-black border-2 px-8 py-4 font-xl '
    placeholder='Enter task here'
    value={title}
    onChange={
      (e)=>{
       settitle(e.target.value)
      }
    }></input>

<input 
    type='text'
    className='m-3 border-black border-2 px-8 py-4 font-xl '
    placeholder='Enter description here'
    value={desc}
    onChange={
      (e)=>{
       setdesc(e.target.value)
      }
    }></input>
   
   <button  className='bg-black h-14 text-center text-white px-5 py-2 rounded m-3'>
    Add Task
   </button>


   </form>

   <hr></hr>
   <hr></hr>

   <div className=' p-8 bg-slate-200'>
    <ul>
      {renderTask}
    </ul>
   </div>

   </>
  )
}

export default TodoList
