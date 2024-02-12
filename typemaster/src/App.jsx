
import { useState } from 'react'
import './App.css'
import {generate, count} from 'random-words';

const generatedWords = generate(33);

function App() {
  

  // const generatedWords = generate(33);
  const [currentWord, setCurrentWord] = useState('');
  const [activeWord, setActiveWord] = useState(0);

  const spaceClicked = (word) => {

    if( word.endsWith(' ')){
      setActiveWord( index => index+1 );
      setCurrentWord('');
    }

    else{
      setCurrentWord(word);
    }

  }


  return (
    <>
      
      <div className='h-screen w-screen flex flex-col justify-around items-center' >

        <p className='text-yellow-400 text-8xl font-extrabold' >
          TYPE MASTER
        </p>

        <div className=' h-56 w-3/4 border-4 p-5 border-blue-300 rounded-2xl bg-black text-white flex flex-row flex-wrap'>

                
                {generatedWords.map( (eachWord, index) => ( <p className= {`m-3 text-2xl font-bold ${index === activeWord ? "text-yellow-300" : "text-white" } `} > {eachWord} </p> ) )}

        </div>

        <input type="text" id="inputBox" className='h-16 w-[40rem] p-5 bg-white rounded-xl text-black font-bold border-4 border-black outline-none focus:border-4 focus:border-blue-600' value={currentWord} onChange={ (e) => spaceClicked(e.target.value) } />

      </div>


    </>
  )
}

export default App
