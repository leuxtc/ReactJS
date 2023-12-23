import React from 'react';
import './App.css';
import './components/form/Form.modules.css'
import CriarUser from './components/form/CriarUser';
import Forms from './components/form/Forms';
import { useState } from 'react'

function App() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [senha, setPassword] = useState()

  return (
    <div className='App'>
      <Forms
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword} />
      <CriarUser
        name={name}
        email={email}
        senha={senha} />
    </div>
  )
}

export default App;
