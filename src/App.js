import React,{useState} from 'react';
import './App.css';

function App() {
  const[todos,setTodos] = useState(['']);
  const[input,setInput] = useState('');
  const addTodo =(event) =>{
// this will fire off  when we click the button
setTodos([...todos , input]);
  }
  

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form>
      <input value ={input} onChange={event => setInput(event.target.value)} />
      <button type ='submit' onClick={addTodo}>What you wanted to do!!</button>

      </form>
      <input value ={input} onChange={event => setInput(event.target.value)} />
      <button onClick={addTodo}>What you wanted to do!!</button>
      <ol>
        {todos.map(todos => (
          <li>{todos}</li>  
        ))}       
      </ol>
    </div>
  );
}
export default App;
