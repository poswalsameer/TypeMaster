
import { useEffect, useState, useRef } from 'react'
import './App.css'
import {generate, count} from 'random-words';
import Result from './Result';

let generatedWords = generate(40);

function App() {
  
  
  // const generatedWords = generate(33);
  const [currentWord, setCurrentWord] = useState('');
  const [activeWord, setActiveWord] = useState(0);
  const [correctWord, setCorrectWord] = useState(Array(generatedWords.length).fill(false));
  const [correctWordString, setCorrectWordString] = useState('');
  const [timer, setTimer] = useState(30);
  const [correctWordCount, setCorrectWordCount] = useState(0);
  const [wrongWordCount, setWrongWordCount] = useState(0);
  const [typedWords, setTypedWords] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerStopped, setTimerStopped] = useState(false);

  //for the result page
  const [testRunning, setTestRunning] = useState(true);

  useEffect(() => {

    let intervalID;

    if(timerRunning){

      intervalID = setInterval(() => {
  
        setTimer(timer => timer-1);
  
        }, 1000);
  
      }

      if(timer === 0 ){
        clearInterval(intervalID);
        setTimerRunning(false);
        setTestRunning(false);
        setTimerStopped(true);
      }
    
    return () => clearInterval(intervalID);

  }, [timer, timerRunning]);

  const takeTestAgain = () => {
    generatedWords = Object.assign(generate(40));
    setTestRunning(true);
    setCurrentWord('');
    setActiveWord(0);
    setCorrectWordString('');
    setCorrectWordCount(0);
    setTimer(30);
    setTimerRunning(false);
    setTimerStopped(false);
    
  }

  const startTimer = () => {
    setActiveWord(0);
    setCurrentWord('');
    setCorrectWordString('');
    setCorrectWordCount(0);
    setTimerRunning(true);
  }


  const spaceClicked = (word) => {

    

    if( word.endsWith(' ')){

      if( activeWord == 39 ){
        generatedWords = Object.assign(generate(40));
        setActiveWord(-1);
        setCorrectWord(Array(generatedWords.length).fill(false))
      }

      if( word.trim()  === generatedWords[activeWord] ){
        const newCorrectWords = [...correctWord];
        newCorrectWords[activeWord] = true;
        setCorrectWord(newCorrectWords);
        setCorrectWordString( correctWordString.concat(word.trim()) );
        setCorrectWordCount(prevCount => prevCount+1);
        setTypedWords(prev => prev+1);
        // console.log(correctWordCount);
        
      }
      else{
        const newCorrectWords = [...correctWord];
        newCorrectWords[activeWord] = false;
        setCorrectWord(newCorrectWords);
        setWrongWordCount(prevCount => prevCount+1);
        setTypedWords(prev => prev+1);
        
      }

      setActiveWord( index => index+1 );
      setCurrentWord('');
      
    }

    else{
      setCurrentWord(word);
    }

  }

  useEffect(() => {
    console.log(correctWordString);
    console.log(correctWordCount);
  }, [correctWordString]);


  return (
  !timerStopped || testRunning ? <>
      
      <div className='h-screen w-screen bg-slate-900 flex flex-col justify-evenly items-center' >

        <p className='mt-4 text-[#fefae0] text-8xl font-extrabold' >
          TYPE MASTER 
        </p>

        <div className='h-10 w-10 my-5 text-3xl text-white flex justify-center items-center font-extrabold  rounded-full'>{timer}</div>

        <div className=' h-72 w-4/5 p-5 border-2 rounded-2xl overflow-hidden bg-slate-900 text-white flex flex-row flex-wrap break-words'>

        {/* index === activeWord ? correctWord ? "text-green-300" : "text-red-400" : "text-white" */}
                
                {generatedWords.map( (eachWord, index) => ( <p className= {`m-3 text-2xl font-bold ${index < activeWord && correctWord[index]
                ? 'text-green-500' : 'text-red-500' } ${ index > activeWord ? 'text-[#fefae0]' : '' } 
                
                `} > {eachWord} </p> ) )}

        </div>

        <button className='my-5 h-8 w-16 rounded-md text-slate-900 border-2 border-[#fefae0] bg-[#fefae0] hover:text-[#fefae0] hover:bg-slate-900 text-sm font-bold' onClick={startTimer}>Start</button>

        <input type="text" id="inputBox" className=' mb-10 h-14 w-[40rem] p-5 bg-[#d4a373] rounded-xl text-slate-900 font-bold border-[3px] border-[#fefae0] outline-none focus:bg-[#fefae0] focus:border-[3px] focus:border-[#d4a373]' value={currentWord} onChange={ (e) => spaceClicked(e.target.value) } />

      </div>


    </> : < Result correctWords={correctWordCount} wrongWords={wrongWordCount} accuracy={Math.round((correctWordCount/typedWords)*100)} speed={Math.round((correctWordString.length*2)/3.8)} takeTest={takeTestAgain}/>
  )
}

export default App
