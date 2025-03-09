import './App.css'
import Header from './components/Header/Header'
import Emojies from './components/Emojies/Emojies'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import { useContext } from 'react'

function App() {
  let [input, setInput] = useState('')
  const handleKeyDown = (event) => {
    setInput(event.target.value)
    console.log(input);
    
  };

  return (
    <>
      <Header />
      <form className="form">
        <input onKeyUp={handleKeyDown} className="form__input" type="text" placeholder="Placeholder" id="input" />
      </form>
      <Emojies input={input}/>
      <Footer />
    </>
  )
}

export default App
