
import React from 'react'
import { useState ,createContext} from 'react'
import Child1 from './Child1'
 export const countContext=createContext(0)
export default function Parent(){
const [count, setCount]=useState(0)
return(

< countContext.Provider value={count}>

   <Child1/>
   <div className='box'><h1>{count}</h1>
   <div className='button'><button className='btn btn-success btn-counter ' onClick={()=>setCount(count+1)}>Add</button></div> </div>
   
</ countContext.Provider>


)



}






