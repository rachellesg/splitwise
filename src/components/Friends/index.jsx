import { useState, useRef, useEffect } from "react";
import FriendsList from "./List";

import styled from "styled-components";

function Friends() {
  const [friends, setFriendsList] = useState([
    { owner: "Rachelle", name: "Charles" },
  ]);
  const friendsRef = useRef();

  useEffect(() => {
    const storedFriendsList = JSON.parse(localStorage.getItem("Friends"));
    if (storedFriendsList) setFriendsList(storedFriendsList);
  }, []);

  useEffect(() => {
    localStorage.setItem("Friends", JSON.stringify(friends));
  }, [friends]);

  const handleAddFriend = (e) => {
    const name = friendsRef.current.value;
    if (name === "") return null;
    setFriendsList((prevList) => {
      return [...prevList, { owner: "Rachelle", name: name }];
    });
    friendsRef.current.value = null;
  };

  return (
    <FriendsWrapper>
      <FriendsList friends={friends} />
      <input ref={friendsRef} type="text" />
      <button onClick={handleAddFriend}>Add Friend</button>
    </FriendsWrapper>
  );
}

export default Friends;

const FriendsWrapper = styled.div`
  width: 40%;
  max-width: 300px;
  border: 1px solid #888888;
  padding: 20px;
  box-shadow: 6px 8px hotpink;
`;
