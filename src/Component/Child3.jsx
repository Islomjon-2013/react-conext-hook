import React from 'react'
import { useContext } from 'react'
import { countContext } from './Parent'
import Child4 from './Child4'
const Child3 = () => {
  const count=useContext(countContext)
  return (
    <div  className='child-box-3'>
    
    <h1 className='box-header'>{count}</h1>
    <Child4/>
    </div>
  )
}

export default Child3