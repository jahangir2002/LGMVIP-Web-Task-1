"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask,{title,desc,completed: false}]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  const toggleComplete = (i) => {
        let copytask = [...mainTask];
        copytask[i].completed = !copytask[i].completed;
        setMainTask(copytask);
      };
    

  let renderTask = <h2>No Task Avalible</h2>;

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return (<li key={i} className={`flex items-center justify-between ${t.completed ? 'line-through text-gray-500' : ''}`}><div className='flex  justify-between mb-5 w-2/3 '>
        <h5 className='text-xl font-semibold'>{t.title}</h5>
        <h5 className='text-base font-semibold'>{t.desc}</h5>
      </div>
      <button onClick={() => toggleComplete(i)} className='bg-green-500 text-white px-4 py-2 rounded font-bold'> 
      {t.completed ? 'Uncomplete' : 'Complete'}
      </button>
     
      <button onClick={()=>{deleteHandler(i)}} className='bg-red-500 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
      );
    });
  }
  return (
    <>
    <h1 className='bg-black text-purple-400  p-5 text-3xl font-bold text-center'>Jahangir's Todo List</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className='text-2xl border-zinc-700 m-5 px-4 py-2' placeholder='Enter Task Here' 
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      <input type="text" className='text-2xl border-zinc-700 m-5 px-4 py-2' placeholder='Enter Description Here' 
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
      <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded'>Add Task</button>
    </form>
    <hr />
    <div className='p-8 bg-slate-300'>
      <ul>{renderTask}</ul>
    </div>
    </>
  )
}

export default page

