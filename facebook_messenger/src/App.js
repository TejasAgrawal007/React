import './App.css';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, Input } from '@mui/material';
import Message from './Message';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';

import db from './firebase'

function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('')


  // useState = It's a variable in ReactJS
  // useEffect = run code on a condition in REACTJS


  useEffect(() => {
    db.collection("massages").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
    })
  }, [])


  useEffect(() => {
    // run code here...
    // if it's blank inside the [] this code run ONCE  when the app components loads
    setUsername(prompt("Please Enter Your Name: "))
  }, []);  // conditions

  // console.log(input);
  // console.log(messages);
  console.log(username);

  const sendMessage = (e) => {
    e.preventDefault();
    //  all the logic to send the message

    db.collection('massages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // setMessages([...messages, { messages: input, username: username }])
    setInput("");
  }

  return (
    <>
      <h1 className="">Messenger App - Tejas </h1>
      <h2 className="">Welcome {username} 🚀</h2>
      <form>
        <FormControl>
          <InputLabel>Enter Your Text: </InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
        </FormControl>
        <Button disabled={!input} variant="outlined" type='submit' onClick={sendMessage}>Send Message</Button>

      </form>

      <FlipMove>
        {
          messages.map(({ id, message, }) => (
            <Message key={id} username={username} message={message} />
          ))
        }

      </FlipMove>


    </>
  );
}

export default App;
