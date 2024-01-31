import './App.css'
import Input from './components/Input'
import WordBox from './components/WordBox'

function App() {
  

  return (
    <>
      
      <div className='h-screen w-screen flex flex-col justify-around items-center' >

        <p className='text-yellow-400 text-8xl font-extrabold' >
          TYPE MASTER
        </p>

        <WordBox />

        <Input />

      </div>


    </>
  )
}

export default App
