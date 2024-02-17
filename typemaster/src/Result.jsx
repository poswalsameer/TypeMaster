import React from 'react'

function Result() {
  return (
    <>
      <div className='h-screen w-screen flex flex-col justify-around items-center' >

        <div className='flex flex-col h-3/4 w-96 justify-center items-start'>

          <p className='text-3xl font-extrabold text-white my-5' >TOTAL WORDS : </p>
          <p className='text-3xl font-extrabold text-white my-5'>CORRECT WORDS : </p>
          <p className='text-3xl font-extrabold text-white my-5'>WRONG WORDS : </p>
          <p className='text-3xl font-extrabold text-white my-5'>ACCURACY : </p>
          <p className='text-3xl font-extrabold text-white my-5'>YOUR SPEED WAS : </p> 

        </div>

      </div>
    </>
  )
}

export default Result
