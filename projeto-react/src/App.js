import './App.css'
import HelloWorld from './components/helloWorld'
import MyName from './components/MyName'
import User from './components/User'
import List from './components/List'

// JSX

function App() {
  const name = 'Leo'
  const url = 'https://via.placeholder.com/150'
  const idade = 15
  const profissao = 'Programador'

  return (
    <div className="App">
      <HelloWorld/>
      
      <MyName name="Isa"/>
      <MyName name={name}/>

      <User 
        foto={url} 
        name={name} 
        idade={idade} 
        profissao={profissao}
      />
      
      <User 
        foto={url} 
        name="Isa" 
        idade="16" 
        profissao="Bióloga"
      />

      <List />
    </div>
  )
}

export default App;
