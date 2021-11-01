import { useState, useEffect } from "react";
import styled from "styled-components";

function Form() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [listOfFriends, setListOfFriends] = useState([
    "Sally",
    "Poppy",
    "Lisa",
  ]);

  const [selectedFriends, setSelectedFriends] = useState([]);

  const selectFriendsToggle = (e) => {
    const addedFriend = e.target.value;
    // to check whether friends is duplicated
    const hasSelectedFriends = !selectedFriends.includes(addedFriend);
    hasSelectedFriends
      ? // ? setSelectedFriends((prevState) => {
        //     return { ...prevState, ...addedFriend };
        //   })
        selectedFriends.push(addedFriend)
      : console.log("remove here", addedFriend);
  };

  const calculateSplitAmount = (e) => {
    const checkIfEmptyList = selectedFriends.length !== 0;
    if (checkIfEmptyList) {
      console.log(selectedFriends);
      const totalNumberOfFriends = selectedFriends.length;
      const finalAmount = totalAmount / totalNumberOfFriends;
      setFinalAmount(finalAmount);
    }
  };

  return (
    <FormWrapper>
      <InputWrapper>
        <label for="total-amount">Total Bill Amount:</label>
        <input
          type="text"
          name="total-amount"
          onChange={(e) => setTotalAmount(e.target.value)}
          placeholder="Enter total bill amount"
        />
      </InputWrapper>

      <div className="toggle-select-friends-buttons">
        {listOfFriends.map((friend) => {
          return (
            <>
              <label for={friend}>{friend}</label>
              <input
                type="checkbox"
                onClick={selectFriendsToggle}
                name={friend}
                value={friend}
              />
            </>
          );
        })}
      </div>

      <button onClick={calculateSplitAmount}>Calculate Amount</button>

      <ResultsWrapper>
        <div className="friends-pay">
          Each person will have to pay: ${finalAmount}
        </div>
      </ResultsWrapper>
    </FormWrapper>
  );
}

export default Form;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: inline-flex;
  margin: 0 0 15px;
  min-width: 50%;
  label {
    width: 50%;
    text-align: right;
    margin-right: 15px;
  }
  input {
    width: 50%;
  }
`;

const ResultsWrapper = styled.div`
  margin: 30px 0;
  font-size: 25px;
  font-weight: 500;
`;
