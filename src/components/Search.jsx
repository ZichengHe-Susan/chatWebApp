import React, { useState } from 'react'
import { collection, query, where, getDocs} from 'firebase/firestore';
import { db } from '../firebase';

const Search = () => {
  const[username, setUsername] = useState("");
  const[user, setUser] = useState(null);
  const[err, setErr] = useState(false);
  

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = () => {
    setUsername("");
    setUser(null);
  }
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User Not Found</span>}
      {user && (
        <div className="userChat" onClick ={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search
