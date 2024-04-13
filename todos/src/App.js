import './App.css';
import { useState, useEffect } from 'react';
import { Button, Input, FormControl, InputLabel } from '@mui/material'
import Todo from './components/Todo';
import db from './firebase'
import firebase from 'firebase';


function App() {

  const [todos, setTodo] = useState(['abc', 'def'])
  const [input, setInput] = useState('');
  console.log(input);


  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.orderBy('timestamp', 'desc').docs.map(doc => doc.data().todo));
      setTodo(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, []);

  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodo([...todos, input])
    console.log("Todo is added");
    setInput('')

  }

  return (
    <>
      <h1 className="">Todo List - Increase Productivity </h1>

      <form >

        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input value={input}
            onChange={event => setInput(event.target.value)} />
        </FormControl>



        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained">Add Todo</Button>

      </form>

      <ul className="">
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>


    </>
  );
}

export default App;
