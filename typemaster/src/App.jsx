
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
    setWrongWordCount(0);
    setTypedWords(0);
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

  const keyPressed = () => {
    let keySound = new Audio('keySound.mp3');
    keySound.play();
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
        console.log(typedWords);
        // console.log(correctWordCount);
        
      }
      else{
        const newCorrectWords = [...correctWord];
        newCorrectWords[activeWord] = false;
        setCorrectWord(newCorrectWords);
        setWrongWordCount(prevCount => prevCount+1);
        setTypedWords(prev => prev+1);
        console.log(typedWords);
        
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
      
      <div className='h-screen w-screen bg-slate-900 flex flex-col justify-evenly items-center
      
      sm:h-screen sm:w-screen sm:bg-slate-900 sm:flex sm:flex-col sm:justify-evenly sm:items-center
      
      md:h-screen md:w-screen md:bg-slate-900 md:flex md:flex-col md:justify-evenly md:items-center
      
      lg:h-screen lg:w-screen lg:bg-slate-900 lg:flex lg:flex-col lg:justify-evenly lg:items-center
      
      xl:h-screen xl:w-screen xl:bg-slate-900 xl:flex xl:flex-col xl:justify-evenly xl:items-center
      
      2xl:h-screen 2xl:w-screen 2xl:bg-slate-900 2xl:flex 2xl:flex-col 2xl:justify-evenly 2xl:items-center' >

        <p className='mt-4 text-[#fefae0] text-4xl font-extrabold
        
        sm:mt-4 sm:text-[#fefae0] sm:text-6xl sm:font-extrabold
        
        md:mt-4 md:text-[#fefae0] md:text-8xl md:font-extrabold
        
        lg:mt-4 lg:text-[#fefae0] lg:text-8xl lg:font-extrabold
        
        xl:mt-4 xl:text-[#fefae0] xl:text-8xl xl:font-extrabold
        
        2xl:mt-4 2xl:text-[#fefae0] 2xl:text-8xl 2xl:font-extrabold' >
          TYPE MASTER 
        </p>

        <div className='h-10 w-10 my-5 text-3xl text-white flex justify-center items-center font-extrabold rounded-full
        
        sm:h-10 sm:w-10 sm:my-5 sm:text-3xl sm:text-white sm:flex sm:justify-center sm:items-center sm:font-extrabold sm:rounded-full
        
        md:h-10 md:w-10 md:my-5 md:text-3xl md:text-white md:flex md:justify-center md:items-center md:font-extrabold md:rounded-full
        
        lg:h-10 lg:w-10 lg:my-5 lg:text-3xl lg:text-white lg:flex lg:justify-center lg:items-center lg:font-extrabold lg:rounded-full
        
        xl:h-10 xl:w-10 xl:my-5 xl:text-3xl xl:text-white xl:flex xl:justify-center xl:items-center xl:font-extrabold xl:rounded-full
        
        2xl:h-10 2xl:w-10 2xl:my-5 2xl:text-3xl 2xl:text-white 2xl:flex 2xl:justify-center 2xl:items-center 2xl:font-extrabold  2xl:rounded-full ' id={ timerRunning ? "timerAnimation" : "" } >

          {timer}

        </div>

        <div className='h-80 w-[93%] p-3 border-2 rounded-2xl overflow-hidden bg-slate-900 text-white flex flex-row flex-wrap break-words
        
        sm:h-80 sm:w-[90%] sm:p-5 sm:border-2 sm:rounded-2xl sm:overflow-hidden sm:bg-slate-900 sm:text-white sm:flex sm:flex-row sm:flex-wrap sm:break-words
        
        md:h-80 md:w-[90%] md:p-5 md:border-2 md:rounded-2xl md:overflow-hidden md:bg-slate-900 md:text-white md:flex md:flex-row md:flex-wrap md:break-words
        
        lg:h-80 lg:w-[90%] lg:p-5 lg:border-2 lg:rounded-2xl lg:overflow-hidden lg:bg-slate-900 lg:text-white lg:flex lg:flex-row lg:flex-wrap lg:break-words
        
        xl:h-80 xl:w-[90%] xl:p-5 xl:border-2 xl:rounded-2xl xl:overflow-hidden xl:bg-slate-900 xl:text-white xl:flex xl:flex-row xl:flex-wrap xl:break-words
        
        2xl:h-72 2xl:w-4/5 2xl:p-5 2xl:border-2 2xl:rounded-2xl 2xl:overflow-hidden 2xl:bg-slate-900 2xl:text-white 2xl:flex 2xl:flex-row 2xl:flex-wrap 2xl:break-words' id='wordDiv'>

        {/* index === activeWord ? correctWord ? "text-green-300" : "text-red-400" : "text-white" */}
                
                {generatedWords.map( (eachWord, index) => ( <p className= {`m-1 text-sm font-semibold sm:m-2 sm:text-lg sm:font-bold md:m-2 md:text-xl md:font-bold lg:m-3 lg:text-xl lg:font-bold xl:m-3 xl:text-2xl xl:font-bold 2xl:m-3 2xl:text-2xl 2xl:font-bold ${index < activeWord && correctWord[index]
                ? 'text-green-500' : 'text-red-500' } ${ index > activeWord ? 'text-white' : '' } 
                
                `} > {eachWord} </p> ) )}

        </div>

        <button className='my-5 h-8 w-16 rounded-md text-slate-900 border-2 border-[#fefae0] bg-[#fefae0] hover:text-[#fefae0] hover:bg-slate-900 text-sm font-bold
        
        sm:my-5 sm:h-8 sm:w-16 sm:rounded-md sm:text-slate-900 sm:border-2 sm:border-[#fefae0] sm:bg-[#fefae0] sm:hover:text-[#fefae0] sm:hover:bg-slate-900 sm:text-sm sm:font-bold
        
        md:my-5 md:h-8 md:w-16 md:rounded-md md:text-slate-900 md:border-2 md:border-[#fefae0] md:bg-[#fefae0] md:hover:text-[#fefae0] md:hover:bg-slate-900 md:text-sm md:font-bold
        
        lg:my-5 lg:h-8 lg:w-16 lg:rounded-md lg:text-slate-900 lg:border-2 lg:border-[#fefae0] lg:bg-[#fefae0] lg:hover:text-[#fefae0] lg:hover:bg-slate-900 lg:text-sm lg:font-bold
        
        xl:my-5 xl:h-8 xl:w-16 xl:rounded-md xl:text-slate-900 xl:border-2 xl:border-[#fefae0] xl:bg-[#fefae0] xl:hover:text-[#fefae0] xl:hover:bg-slate-900 xl:text-sm xl:font-bold
        
        2xl:my-5 2xl:h-8 2xl:w-16 2xl:rounded-md 2xl:text-slate-900 2xl:border-2 2xl:border-[#fefae0] 2xl:bg-[#fefae0] 2xl:hover:text-[#fefae0] 2xl:hover:bg-slate-900 2xl:text-sm 2xl:font-bold' onClick={startTimer}>Start</button>

        <input type="text" id="inputBox" className='mb-10 h-10 w-[15rem] p-5 bg-[#d4a373] rounded-xl text-slate-900 font-bold border-[3px] border-[#fefae0] outline-none focus:bg-[#fefae0] focus:border-[3px] focus:border-[#d4a373]
        
        sm:mb-10 sm:h-14 sm:w-[30rem] sm:p-5 sm:bg-[#d4a373] sm:rounded-xl sm:text-slate-900 sm:font-bold sm:border-[3px] sm:border-[#fefae0] sm:outline-none sm:focus:bg-[#fefae0] sm:focus:border-[3px] sm:focus:border-[#d4a373]
        
        md:mb-10 md:h-14 md:w-[35rem] md:p-5 md:bg-[#d4a373] md:rounded-xl md:text-slate-900 md:font-bold md:border-[3px] md:border-[#fefae0] md:outline-none md:focus:bg-[#fefae0] md:focus:border-[3px] md:focus:border-[#d4a373]
        
        lg:mb-10 lg:h-14 lg:w-[40rem] lg:p-5 lg:bg-[#d4a373] lg:rounded-xl lg:text-slate-900 lg:font-bold lg:border-[3px] lg:border-[#fefae0] lg:outline-none lg:focus:bg-[#fefae0] lg:focus:border-[3px] lg:focus:border-[#d4a373]
        
        xl:mb-10 xl:h-14 xl:w-[40rem] xl:p-5 xl:bg-[#d4a373] xl:rounded-xl xl:text-slate-900 xl:font-bold xl:border-[3px] xl:border-[#fefae0] xl:outline-none xl:focus:bg-[#fefae0] xl:focus:border-[3px] xl:focus:border-[#d4a373]
        
        2xl:mb-10 2xl:h-14 2xl:w-[40rem] 2xl:p-5 2xl:bg-[#d4a373] 2xl:rounded-xl 2xl:text-slate-900 2xl:font-bold 2xl:border-[3px] 2xl:border-[#fefae0] 2xl:outline-none 2xl:focus:bg-[#fefae0] 2xl:focus:border-[3px] 2xl:focus:border-[#d4a373]' value={currentWord} onChange={ (e) => spaceClicked(e.target.value) } onKeyDown={keyPressed} />

      </div>


    </> : < Result correctWords={correctWordCount} wrongWords={wrongWordCount} accuracy={Math.round((correctWordCount/typedWords)*100)} speed={Math.round((correctWordString.length*2)/3.5)} takeTest={takeTestAgain}/>
  )
}

export default App
