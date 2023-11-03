import React, { useState } from 'react'

export const Counter = () => {

    const [counter, setCounter] = useState(0)

    const maxCouenter = ( numero: number = 1) => {
        setCounter (counter + numero )
    }    


  return (
    <div className='mt-5 flex items-center justify-center flex-col gap-3'>
        <h3>Counter</h3>
        <div className='gap-4 flex justify-center w-full '>
        <button onClick={ () => maxCouenter()} className='bg-teal-600 border-x-2 border-y-2 border-white rounded-sm p-3 '>
            +1
            </button>
            <button onClick={() => maxCouenter(-1)} className='bg-red-500 border-x-2 border-y-2 border-white rounded-sm p-3 '>
            -1
            </button>
            <button onClick={() => setCounter(0)} className='bg-red-500 border-x-2 border-y-2 border-white rounded-sm p-3 '>
                Reset
            </button>
        </div>
        <span>Valor { counter }</span>
    </div>
  )
}

export default Counter;