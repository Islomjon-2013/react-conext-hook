import React from 'react'
import Child5 from './Child5'
import { useContext } from 'react'
import { countContext } from './Parent'
const Child4 = () => {
  const count=useContext(countContext)
  return (
    <div  className='child-box-4'>
         <h1 className='box-header'>{count}</h1>
    <Child5/>
    </div>
  )
}

export default Child4