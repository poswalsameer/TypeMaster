import React from 'react'

function Result(props) {
  return (
    <>
      <div className='h-screen w-screen bg-slate-900 flex flex-col justify-around items-center' >

        <div className='flex flex-col h-full w-screen justify-center items-center'>

          {/* <p className='text-4xl font-extrabold text-[#d4a373] my-5' >TOTAL WORDS : <span className=' text-[#fefae0] font-bold'> {props.totalWords} </span> </p> */}
          <p className='text-4xl font-extrabold text-[#d4a373] my-5'>CORRECT WORDS : <span className=' text-[#fefae0] font-bold'> {props.correctWords} </span> </p>
          <p className='text-4xl font-extrabold text-[#d4a373] my-5'>WRONG WORDS : <span className=' text-[#fefae0] font-bold'> {props.wrongWords} </span> </p>
          <p className='text-4xl font-extrabold text-[#d4a373] my-5'>ACCURACY : <span className=' text-[#fefae0] font-bold'> {props.accuracy}% </span> </p>
          <p className='text-4xl font-extrabold text-[#d4a373] my-5'>SPEED : <span className=' text-[#fefae0] font-bold'> {props.speed} Words Per Minute </span> </p> 

          <button className='mt-10 h-10 w-40 rounded-lg  text-slate-900 border-2 border-[#fefae0] bg-[#fefae0] hover:text-[#fefae0] hover:bg-slate-900 font-bold' onClick={props.takeTest} >
            Take Test Again
          </button>

        </div>

      </div>
    </>
  )
}

export default Result
