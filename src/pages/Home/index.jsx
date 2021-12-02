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
      <FriendsWrapper>
        <div className="friends-fields">
          <input ref={friendsRef} type="text" />
          <br />
          <button onClick={handleAddFriend}>Add Friend</button>
        </div>
        <FriendsList friends={friends} />
        <br />
        Amount per pax: ${totalBills / friends.length}
      </FriendsWrapper>
      <BillWrapper>
        <BillsList bills={bills} />
        <div className="bill-fields">
          <div className="bill-fields_name">
            <input ref={billNameRef} type="text" placeholder="Name of Bill" />
          </div>
          <div className="bill-fields_amount">
            <input ref={billRef} type="number" placeholder="Amount" />
          </div>
        </div>
        <button onClick={handleAddBill}>Add Bill</button>
        <br />
        Total Settlement Amount: ${totalBills}
      </BillWrapper>
    </ContentWrapper>
  );
}

export default Home;

const ContentWrapper = styled.section`
  /* display: inline-flex;
  justify-content: space-between; */
  width: 768px;
  margin: 0 auto;
`;

const FriendsWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  padding: 20px;
  margin: 0 0 30px;
  box-shadow: 0 0 50px #ccc;
  background: #c490f7;

  .friends-fields {
  }
  .friends-content {
    display: inline-flex;
    padding: 0 20px;
    .friends-content_friend {
      display: flex;
      flex-direction: column;
      .friends-content_friend-profile {
        width: 40px;
        height: 40px;
        background: #292b45;
        border-radius: 50%;
      }
      .friends-content_friend-name {
      }
    }
  }
`;

const BillWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-shadow: 0 0 50px #ccc;

  .bill-fields {
    display: flex;
    justify-content: space-between;
    input[type="number"] {
      border-top: 0;
      border-left: 0;
      border-right: 0;
      border-bottom: 1px dotted darkolivegreen;
      font-size: 25px;
      width: 80px;
      padding: 5px 10px;
    }
  }
  .bill-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .bill-content_title {
    }
    .bill-content_amount {
      background: #9b80e6;
      color: #ffffff;
      padding: 5px 10px;
    }
  }
`;
