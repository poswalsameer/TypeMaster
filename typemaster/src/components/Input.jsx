import React from 'react'
import { useState } from 'react'

function Input() {

  const [currentWord, setCurrentWord] = useState('');

  const spaceClicked = (word) => {

    if( word.endsWith(' ')){
      setCurrentWord('');
    }
    else{
      setCurrentWord(word);
    }

  }


  return (
    <>
      
        <input type="text" id="inputBox" className='h-16 w-[40rem] p-5 bg-white rounded-xl text-black font-bold border-4 border-black outline-none focus:border-4 focus:border-blue-600' value={currentWord} onChange={ (e) => spaceClicked(e.target.value) } />

    </>
  )
}

export default Input
