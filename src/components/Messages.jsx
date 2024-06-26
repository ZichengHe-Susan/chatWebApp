import React from 'react'
import Message from './Message'
import { useState, useEffect, useContext } from 'react'
import { db } from '../../firebase.js';
import { onSnapshot, doc } from 'firebase/firestore';
import { ChatContext } from '../context/ChatContext';


const Messages = () => {
  const [messages, setMessages] = useState([]); 
  const {data} = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unSub();
    };

  }, [data.chatId])

  console.log(messages)


  return (
    <div className='messages'>
      {messages.map((m) => (
        <Message message={m} key= {m.id}/>
      ))}

    </div>
  )
}

export default Messages
