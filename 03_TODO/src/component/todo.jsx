import React ,{ useState , useEffect} from 'react'

export default function Todo() {
    const [task , setTask]= useState('');
    const[tasks, setTasks]= useState([]);

   
     useEffect (()=>{
         if(localStorage.getItem("localTasks")){
             const storedlist = JSON.parse(localStorage.getItem("localTasks" ));
             setTasks(storedlist);
         }
     } ,[]);

    const addTask =(e)=>{
        if (task){
            const newTask = { id: new Date().getTime().toString(), title : task };
            setTasks ([...tasks, newTask]);
            localStorage.setItem("localTasks" , JSON.stringify([...tasks, newTask]));
            setTask("");

        }
    }

    const handleDelete =(task)=>{
        const deleted = tasks.filter((t)=> t.id !== task.id);
        setTasks(deleted);
        localStorage.setItem("localTasks" , JSON.stringify(deleted));
    }

const handleclear = ()=>{
    setTasks([]);
    localStorage.removeItem("localTasks");
}


  return (
    <div className='  d-block  w-full'>
        <h1 className='mt-3 text-white hover:font-bold'>My Daily Tasks</h1><hr/>
<div className=' d-inline-flex '>
<div className="col-8 ">
    <input name='task' 
           type="text" 
           value={task}            
            placeholder='Write your Task'
            className='form-control'
            onChange={(e) => setTask (e.target.value)}
     />
</div>
&nbsp;

<div className="col-4">
    <button className= " bg-slate-900 rounded-lg text-white material-icons px-5 py-2"
    onClick={addTask} >add</button>
</div>
</div>
<br/>

<div className='badge '>
    You have
    {
        !tasks.length? " no tasks" : tasks.length === 1 ?"1 task"
:tasks.length > 1?  ` ${tasks.length} tasks`:null   }

</div>




<div>
    {
        tasks.map((task) =>(
            <React.Fragment key={task.id } >
<div className='d-flex  justify-center  '>
                <div className="col-6">
                    <span className=' form-control bg-white  btn  mt-2 '
                    style={{textAlign:"left", fontWeight:"bold"}}
                    >
                        {task.title}
                    </span>
                </div>&nbsp;&nbsp;
                <div className="col-1">
                    <button className=' mt-2 bg-stone-600 hover:bg-slate-900 rounded-lg text-white  material-icons  py-2 '
                    onClick={ ()=> handleDelete(task)}> delete</button>
                </div>
                </div>
            </React.Fragment>
        ))}

        {!tasks.length ? null:(
            <div>
                <button className=' bg-slate-900 rounded-lg text-slate-200 mt-4 mb-4'
                onClick={()=>handleclear()}>Clear</button>
            </div>
        )}
</div>
</div>


    
  )
}
