import Friend from "./Friend";

function FriendsList({ friends }) {
  return friends.map((friend, index) => {
    return <Friend key={index} friend={friend.name} />;
  });
}

export default FriendsList;
