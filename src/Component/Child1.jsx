import React from 'react'
import Child2 from './Child2'
import { useContext } from 'react'
import { countContext } from './Parent'
const Child1 = () => {
    const count=useContext(countContext)
  return (
    <div className='child-box-1'>
    
    <Child2/>

    <h1 className='box-header'>{count}</h1>
    </div>
  )
}

export default Child1
