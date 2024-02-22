import React from 'react'

function Result(props) {
  return (
    <>
      <div className='h-screen w-screen flex flex-col justify-around items-center' >

        <div className='flex flex-col h-full w-[30rem] justify-center items-center'>

          <p className='text-3xl font-extrabold text-white my-5' >TOTAL WORDS : {props.totalWords} </p>
          <p className='text-3xl font-extrabold text-white my-5'>CORRECT WORDS : {props.correctWords} </p>
          <p className='text-3xl font-extrabold text-white my-5'>WRONG WORDS : {props.wrongWords} </p>
          <p className='text-3xl font-extrabold text-white my-5'>ACCURACY : {props.accuracy} </p>
          <p className='text-3xl font-extrabold text-white my-5'>SPEED : {props.speed} Words Per Minute</p> 

          <button className='my-3 h-10 w-40 rounded-lg border-2 border-yellow-950 bg-yellow-100 font-bold' onClick={props.takeTest} >
            Take Test Again
          </button>

        </div>

      </div>
    </>
  )
}

export default Result
