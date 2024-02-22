
import { useEffect, useState } from 'react'
import './App.css'
import {generate, count} from 'random-words';
import Result from './Result';

let generatedWords = generate(50);

function App() {
  
  
  // const generatedWords = generate(33);
  const [currentWord, setCurrentWord] = useState('');
  const [activeWord, setActiveWord] = useState(0);
  const [correctWord, setCorrectWord] = useState(Array(generatedWords.length).fill(false));
  const [correctWordString, setCorrectWordString] = useState('');
  const [timer, setTimer] = useState(5);
  const [correctWordCount, setCorrectWordCount] = useState(0);
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
    setTestRunning(true);
    setCurrentWord('');
    setActiveWord(0);
    setCorrectWordString('');
    setCorrectWordCount(0);
    setTimer(5);
    setTimerRunning(false);
    setTimerStopped(false);
    
  }

  const startTimer = () => {
    setActiveWord(0);
    setCorrectWordString('');
    setCorrectWordCount(0);
    setTimerRunning(true);
  }


  const spaceClicked = (word) => {

    if( word.endsWith(' ')){

      // word = word.slice(0, word.length-1);

      if( word.trim()  === generatedWords[activeWord] ){
        const newCorrectWords = [...correctWord];
        newCorrectWords[activeWord] = true;
        setCorrectWord(newCorrectWords);
        setCorrectWordString( correctWordString.concat(word.trim()) );
        setCorrectWordCount(prevCount => prevCount+1);
        // console.log(correctWordCount);
        
      }
      else{
        const newCorrectWords = [...correctWord];
        newCorrectWords[activeWord] = false;
        setCorrectWord(newCorrectWords);
        
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
      
      <div className='h-screen w-screen flex flex-col justify-evenly items-center' >

        <p className='mt-4 text-yellow-400 text-8xl font-extrabold' >
          TYPE MASTER 
        </p>

        <div className='ml-[65rem] h-10 w-10 text- flex justify-center items-center font-extrabold bg-green-200 px-4 py-3 rounded-full'>{timer}</div>

        <div className=' h-80 w-3/4 border-4 p-5 border-blue-300 rounded-2xl bg-black text-white flex flex-row flex-wrap break-words'>

        {/* index === activeWord ? correctWord ? "text-green-300" : "text-red-400" : "text-white" */}
                
                {generatedWords.map( (eachWord, index) => ( <p className= {`m-3 text-2xl font-bold ${index < activeWord && correctWord[index]
                ? 'text-green-500' : 'text-red-500' } ${ index > activeWord ? 'text-slate-200' : '' } 
                
                `} > {eachWord} </p> ) )}

        </div>

        <button className='my-3 h-10 w-16 rounded-lg border-2 border-yellow-950 bg-yellow-100 font-bold' onClick={startTimer}>Start</button>

        <input type="text" id="inputBox" className=' mb-10 h-16 w-[40rem] p-5 bg-white rounded-xl text-black font-bold border-4 border-black outline-none focus:border-4 focus:border-blue-600' value={currentWord} onChange={ (e) => spaceClicked(e.target.value) } />

      </div>


    </> : < Result totalWords={50} correctWords={correctWordCount} wrongWords={50-correctWordCount} accuracy={(correctWordCount/50)*100} speed={correctWordCount*2} takeTest={takeTestAgain}/>
  )
}

export default App
