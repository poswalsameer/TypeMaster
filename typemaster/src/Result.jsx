import React from 'react'

function Result(props) {
  return (
    <>
      <div className='h-screen w-screen bg-slate-900 flex flex-col justify-around items-center
      
      sm:h-screen sm:w-screen sm:bg-slate-900 sm:flex sm:flex-col sm:justify-around sm:items-center
      
      md:h-screen md:w-screen md:bg-slate-900 md:flex md:flex-col md:justify-around md:items-center
      
      lg:h-screen lg:w-screen lg:bg-slate-900 lg:flex lg:flex-col lg:justify-around lg:items-center
      
      xl:h-screen xl:w-screen xl:bg-slate-900 xl:flex xl:flex-col xl:justify-around xl:items-center
      
      2xl:h-screen 2xl:w-screen 2xl:bg-slate-900 2xl:flex 2xl:flex-col 2xl:justify-around 2xl:items-center' >

        <div className='flex flex-col h-full w-screen justify-center items-center
        
        sm:flex sm:flex-col sm:h-full sm:w-screen sm:justify-center sm:items-center
        
        md:flex md:flex-col md:h-full md:w-screen md:justify-center md:items-center
        
        lg:flex lg:flex-col lg:h-full lg:w-screen lg:justify-center lg:items-center
        
        xl:flex xl:flex-col xl:h-full xl:w-screen xl:justify-center xl:items-center
        
        2xl:flex 2xl:flex-col 2xl:h-full 2xl:w-screen 2xl:justify-center 2xl:items-center'>

          {/* <p className='text-4xl font-extrabold text-[#d4a373] my-5' >TOTAL WORDS : <span className=' text-[#fefae0] font-bold'> {props.totalWords} </span> </p> */}
          <p className='text-2xl font-extrabold text-[#d4a373] my-5
          
          sm:text-3xl sm:font-extrabold sm:text-[#d4a373] sm:my-5
          
          md:text-4xl md:font-extrabold md:text-[#d4a373] md:my-5
          
          lg:text-4xl lg:font-extrabold lg:text-[#d4a373] lg:my-5
          
          xl:text-4xl xl:font-extrabold xl:text-[#d4a373] xl:my-5
          
          2xl:text-4xl 2xl:font-extrabold 2xl:text-[#d4a373] 2xl:my-5'>CORRECT WORDS : <span className='text-[#fefae0] font-bold
          
          sm:text-[#fefae0] sm:font-bold
          
          md:text-[#fefae0] md:font-bold
          
          lg:text-[#fefae0] lg:font-bold
          
          xl:text-[#fefae0] xl:font-bold
          
          2xl:text-[#fefae0] 2xl:font-bold'> {props.correctWords} </span> </p>

          <p className='text-2xl font-extrabold text-[#d4a373] my-5
          
          sm:text-3xl sm:font-extrabold sm:text-[#d4a373] sm:my-5
          
          md:text-4xl md:font-extrabold md:text-[#d4a373] md:my-5
          
          lg:text-4xl lg:font-extrabold lg:text-[#d4a373] lg:my-5
          
          xl:text-4xl xl:font-extrabold xl:text-[#d4a373] xl:my-5
          
          2xl:text-4xl 2xl:font-extrabold 2xl:text-[#d4a373] 2xl:my-5'>WRONG WORDS : <span className='text-[#fefae0] font-bold
          
          sm:text-[#fefae0] sm:font-bold
          
          md:text-[#fefae0] md:font-bold
          
          lg:text-[#fefae0] lg:font-bold
          
          xl:text-[#fefae0] xl:font-bold
          
          2xl:text-[#fefae0] 2xl:font-bold'> {props.wrongWords} </span> </p>

          <p className='text-2xl font-extrabold text-[#d4a373] my-5
          
          sm:text-3xl sm:font-extrabold sm:text-[#d4a373] sm:my-5
          
          md:text-4xl md:font-extrabold md:text-[#d4a373] md:my-5
          
          lg:text-4xl lg:font-extrabold lg:text-[#d4a373] lg:my-5
          
          xl:text-4xl xl:font-extrabold xl:text-[#d4a373] xl:my-5
          
          2xl:text-4xl 2xl:font-extrabold 2xl:text-[#d4a373] 2xl:my-5'>ACCURACY : <span className='text-[#fefae0] font-bold
          
          sm:text-[#fefae0] sm:font-bold
          
          md:text-[#fefae0] md:font-bold
          
          lg:text-[#fefae0] lg:font-bold
          
          xl:text-[#fefae0] xl:font-bold
          
          2xl:text-[#fefae0] 2xl:font-bold'> {props.accuracy}% </span> </p>

          <p className='text-2xl font-extrabold text-[#d4a373] my-5
          
          sm:text-3xl sm:font-extrabold sm:text-[#d4a373] sm:my-5
          
          md:text-4xl md:font-extrabold md:text-[#d4a373] md:my-5
          
          lg:text-4xl lg:font-extrabold lg:text-[#d4a373] lg:my-5
          
          xl:text-4xl xl:font-extrabold xl:text-[#d4a373] xl:my-5
          
          2xl:text-4xl 2xl:font-extrabold 2xl:text-[#d4a373] 2xl:my-5'>SPEED : <span className='text-[#fefae0] font-bold
          
          sm:text-[#fefae0] sm:font-bold
          
          md:text-[#fefae0] md:font-bold
          
          lg:text-[#fefae0] lg:font-bold
          
          xl:text-[#fefae0] xl:font-bold
          
          2xl:text-[#fefae0] 2xl:font-bold'> {props.speed} WPM</span> </p> 

          <button className='mt-7 h-10 w-40 rounded-lg  text-slate-900 border-2 border-[#fefae0] bg-[#fefae0] hover:text-[#fefae0] hover:bg-slate-900 font-bold
          
          sm:mt-7 sm:h-10 sm:w-40 sm:rounded-lg  sm:text-slate-900 sm:border-2 sm:border-[#fefae0] sm:bg-[#fefae0] sm:hover:text-[#fefae0] sm:hover:bg-slate-900 sm:font-bold
          
          md:mt-10 md:h-10 md:w-40 md:rounded-lg  md:text-slate-900 md:border-2 md:border-[#fefae0] md:bg-[#fefae0] md:hover:text-[#fefae0] md:hover:bg-slate-900 md:font-bold
          
          lg:mt-10 lg:h-10 lg:w-40 lg:rounded-lg  lg:text-slate-900 lg:border-2 lg:border-[#fefae0] lg:bg-[#fefae0] lg:hover:text-[#fefae0] lg:hover:bg-slate-900 lg:font-bold
          
          xl:mt-10 xl:h-10 xl:w-40 xl:rounded-lg  xl:text-slate-900 xl:border-2 xl:border-[#fefae0] xl:bg-[#fefae0] xl:hover:text-[#fefae0] xl:hover:bg-slate-900 xl:font-bold
          
          2xl:mt-10 2xl:h-10 2xl:w-40 2xl:rounded-lg  2xl:text-slate-900 2xl:border-2 2xl:border-[#fefae0] 2xl:bg-[#fefae0] 2xl:hover:text-[#fefae0] 2xl:hover:bg-slate-900 2xl:font-bold' onClick={props.takeTest} >
            Take Test Again
          </button>

        </div>

      </div>
    </>
  )
}

export default Result
