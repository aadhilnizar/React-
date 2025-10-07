import React,{useState} from "react";
import { memo } from "react";


  const Counters = ()=> {


    const [counter , setCount] = useState(0)
    console.log(counter);
        
    

    return (
        <>
        <h3>{counter}</h3>
        <button onClick={()=>setCount(counter + 1)}>Increment</button>
        </>
    )
}
export default memo(Counters) ;