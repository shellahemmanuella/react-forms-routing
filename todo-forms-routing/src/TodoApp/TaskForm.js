import {useState} from "react";

export default function TaskForm({onAdd}) {
  const [taskName,setTaskName] = useState('');
  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName('');
  }
  return (
    <form onSubmit={handleSubmit} style={{border:"3px solid #ffffff", padding:"10px"}}>
      <button style={{color:"#ffc700", backgroundColor:"#005739", height:"40px", paddingRight: "18px", width:"15px", marginRight:"8px",fontSize:"20px"}}>+</button>
      <input type="text"
             value={taskName}
             onChange={ev => setTaskName(ev.target.value)}
             placeholder="Your next task..."
             style={{background: " #005739",
              color:"#fff",
              borderRadius:"10px",
              border:"none",
              padding: "0 8px",
              display:"block",
              width: "100%"}}/>
    </form>
  );
}