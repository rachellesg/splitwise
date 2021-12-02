import { useState, useRef, useEffect } from "react";

import BillsList from "../../components/Bills/List";
import FriendsList from "../../components/Friends/List";

import styled from "styled-components";

function Home() {
  const [bills, setBill] = useState([
    { name: "Jollibee on Wednesday", amount: 85 },
    { name: "Grab Fare", amount: 40 },
  ]);
  const billRef = useRef();
  const billNameRef = useRef();

  const [friends, setFriendsList] = useState([
    { owner: "Rachelle", name: "Charles" },
  ]);
  const friendsRef = useRef();

  const handleAddBill = (e) => {
    const billName = billNameRef.current.value;
    const bill = billRef.current.value;
    console.log(billName, bill);
    setBill((prevList) => {
      return [...prevList, { name: billName, amount: parseInt(bill) || 0 }];
    });
    billNameRef.current.value = null;
    billRef.current.value = null;
  };

  const handleAddFriend = (e) => {
    const name = friendsRef.current.value;
    if (name === "") return null;
    setFriendsList((prevList) => {
      return [...prevList, { owner: "Rachelle", name: name }];
    });
    friendsRef.current.value = null;
  };

  const totalBills = bills.reduce((totalBillsAmount, bill) => {
    console.log(bills);
    console.log(`Total: ${totalBillsAmount}`);
    console.log(`Bill: ${bill.amount}`);
    return totalBillsAmount + bill.amount;
  }, 0);

  // useEffect(() => {
  //   const storedFriendsList = JSON.parse(localStorage.getItem("Friends"));
  //   if (storedFriendsList) setFriendsList(storedFriendsList);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("Friends", JSON.stringify(friends));
  // }, [friends]);
  return (
    <ContentWrapper>
      <h1>This is home page yay</h1>
      <BillWrapper>
        <BillsList bills={bills} />
        <input ref={billNameRef} type="text" placeholder="Name of Bill" />
        <input ref={billRef} type="number" placeholder="Amount" />
        <button onClick={handleAddBill}>Add Bill</button>
        Total Settlement Amount: {totalBills}
      </BillWrapper>
      <FriendsWrapper>
        <FriendsList friends={friends} />
        <input ref={friendsRef} type="text" />
        <button onClick={handleAddFriend}>Add Friend</button>
      </FriendsWrapper>
      Amount per pax: ${totalBills / friends.length}
    </ContentWrapper>
  );
}

export default Home;

const ContentWrapper = styled.section`
  display: inline-flex;
  justify-content: space-between;
`;

const BillWrapper = styled.div`
  padding: 20px;
  box-shadow: -6px -8px 0 0 darkolivegreen;
`;

const FriendsWrapper = styled.div`
  width: 40%;
  max-width: 300px;
  padding: 20px;
  box-shadow: 6px 8px hotpink;
`;
