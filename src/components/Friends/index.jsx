import { useState, useRef } from "react";
import FriendsList from "./List";

function Friends() {
  const [friends, setFriendsList] = useState([
    { owner: "Rachelle", name: "Charles" },
  ]);
  const friendsRef = useRef();

  const handleAddFriend = (e) => {
    const name = friendsRef.current.value;
    if (name === "") return null;
    setFriendsList((prevList) => {
      return [...prevList, { owner: "Rachelle", name: name }];
    });
    friendsRef.current.value = null;
  };

  return (
    <>
      <FriendsList friends={friends} />
      <input ref={friendsRef} type="text" />
      <button onClick={handleAddFriend}>Add Friend</button>
    </>
  );
}

export default Friends;
