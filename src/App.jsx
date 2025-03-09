import './App.css'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Emojies from './components/Emojies/Emojies'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import { useContext } from 'react'

function App() {
  let [input, setInput] = useState('')
  const handleKeyDown = (event) => {
      setInput(event.target.value)
  };
  return (
    <>
      <Header />
      <Form func={handleKeyDown}/>
      <Emojies input={input.toLowerCase()}/>
      <Footer />
    </>
  )
}

export default App
