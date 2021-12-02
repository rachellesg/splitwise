function Friend({ friend }) {
  return (
    <div className="friends-content_friend">
      <div className="friends-content_friend-profile"></div>
      <div className="friends-content_friend-name">{friend}</div>
    </div>
  );
}

export default Friend;
