import React from "react";
import { useState } from "react";
const HomePage = (props) => {
  const user=props
  console.log(user?.props?.data?.user?.name)
  const [todo,setTodo]=useState([])
  const [weight,setWeight]=useState()
  const [unit,setUnit]=useState()
 const[desc,setDesc]=useState()
 const [color,setColor]=useState();


 
    
console.log(desc)

  const Submit=()=>{
    if(weight>60){
      setDesc("Over Weight")
      setColor('Red')
     }else if(weight>50 && weight<60){
      setDesc("Ideal Weight")
      setColor('Green')
     }else{
      setDesc("under weight")
      setColor('orange')
     }
    setTodo([...todo, { weight: weight, unit: unit,date:new Date(),desc:desc,color:color,id:"" }])
        // setWeight("")
        // setUnit("")
        // setDesc('')
// console.log(weight)
console.log(desc)
  }

  const delet=(delval)=>{
        
    const newTableData = todo.filter((data)=> {
        return data.weight !== delval.weight
    });
    setTodo(newTableData);
}

  return (
    <div>
      <p>Welcome {user?.props?.data?.user?.name} Enter ur Weight </p>
     
      <label htmlFor="Weight">
        <input type="text" placeholder="Enter Ur Weight.." onChange={(e)=>{setWeight(e.target.value)}}/>
      </label>
      <select onChange={(e)=>{setUnit(e.target.value)}}>
      <option value="Select">Select</option>
        <option value="Kg">Kg</option>
        <option value="Pound">Pound</option>
      </select>
     
      <button onClick={Submit}>Submit</button>
   {(todo.length)===0?null:(  
 <div>
 <table className="table">
     <thead>
         <tr className="row">
           <th>Date</th>
             <th>Weight</th>
             <th>Unit</th>
             <th>Description</th>
         </tr>

     </thead>
     <tbody>
         {todo.map((val, index) => {
             return (
                 <tr key={index}>
                     <td>{val.date.toLocaleDateString()}</td>
                     <td style={{ backgroundColor:color}}>{val.weight}</td>
                     <td>{val.unit}</td>
                     <td>{val.desc}</td>
                     <td><button onClick={()=>{delet(val)}}>Delete</button></td>
                 </tr>
             )

         })}
     </tbody>
 </table>
</div>
)} 
     
   
     
    </div>
  );
};
export default HomePage;
