import React from 'react';
import {generate, count} from 'random-words';
import { useState } from 'react';
import { useEffect } from 'react';

function WordBox() {

    // console.log(generate(10));
    // generate(N) --> this is the syntax to generate random N words, the output will be in the form of an array

    const generatedWords = generate(33);

    const [activeWord, setActiveWord] = useState(0);

    // const spaceBarClicked = () => {

        

    // }

  return (
    <>

        <div className=' h-56 w-3/4 border-4 p-5 border-blue-300 rounded-2xl bg-black text-white flex flex-row flex-wrap'>

                
                {generatedWords.map( (eachWord, index) => ( <p className= {`m-3 text-2xl font-bold ${index === activeWord ? "text-yellow-300" : "text-white" } `} > {eachWord} </p> ) )}

        </div>
      
    </>
  )
}

export default WordBox
