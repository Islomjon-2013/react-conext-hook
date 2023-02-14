import React from 'react'
import { useContext } from 'react'
import Child3 from './Child3'
import { countContext } from './Parent'
const Child2 = () => {
  const count=useContext(countContext)
  return (
    <div  className='child-box-2'>
    <h1 className='box-header'>{count}</h1>
<Child3/>
    </div>
  )
}

export default Child2