import { doc } from 'firebase/firestore';
import React, { useEffect, useState, useContext} from 'react'
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { onSnapshot } from 'firebase/firestore';
import { ChatContext } from '../context/ChatContext';

const Chats = () => {

  const[chats, setChats] = useState([]);
  const {currentUser} = useContext(AuthContext);
  const {dispatch} = useContext(ChatContext);
  useEffect(() => {
    const getChats = async () => {
    const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
      setChats(doc.data())
    });
    return () => { unsub();
    };
  };
   currentUser.uid && getChats();
  
  }, [currentUser.uid])
    const handleSelect = () => {
      dispatch({
        type: "CHANGE_USER",
        payload: {
          user: chat[1].userInfo,
          uid: chat[0],
        },
      });
    }
  return (
    <div className='chats'>
      {Object.entries(chats)?.map((chat) => (
      <div className="userChat" key = {chat[0]} onClick = {() =>handleSelect(chat[1].userInfo)}>
        <img src = {chat[1].userInfo.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{chat[1].userInfo.displayName}</span>
          <p>{chat[1].userInfo.lastMessage?.text}</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Chats
