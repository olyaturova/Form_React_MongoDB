import { useState } from 'react'
import './App.css';
import Form from './Form';



function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  return (
    <div className="App">
      <Form name = {name} setName = {setName} 
            email = {email} setEmail = {setEmail} 
            message = {message} setMessage = {setMessage} 
      />

      
    </div>
  );
}

export default App;
