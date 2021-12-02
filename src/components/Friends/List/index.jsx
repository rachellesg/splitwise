import Friend from "./Friend";

function FriendsList({ friends }) {
  return friends.map((friend, index) => {
    return (
      <div className="friends-content">
        <Friend key={index} friend={friend.name} />
      </div>
    );
  });
}

export default FriendsList;
