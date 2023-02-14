import React from 'react'
import { useContext } from 'react'
import { countContext } from './Parent'
const Child5 = () => {
  const count=useContext(countContext)
  return (
    <div  className='child-box-5'>


<h1>{count}</h1>
    </div>

  )
}

export default Child5