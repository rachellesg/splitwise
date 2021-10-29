import { useState } from "react";
import styled from "styled-components";

function Form() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [totalNumberOfFriends, setTotalNumberOfFriends] = useState(1);
  const [listOfFriends, setListOfFriends] = useState([
    "Sally",
    "Poppy",
    "Lisa",
  ]);

  const selectedFriends = [];

  // this pushes selected friends into a list
  const selectFriendsToggle = (e) => {
    e.preventDefault();
    selectedFriends.includes(e.target.value)
      ? console.log("!! DUPLICATE, already have in list")
      : selectedFriends.push(e.target.value);

    console.log(selectedFriends);
  };

  // this is for number of friends (drop down)
  const selectFriendsTotal = (e) => {
    e.preventDefault();
    setTotalNumberOfFriends(e.target.value);
  };

  const calculateSplitAmount = (e) => {
    e.preventDefault();
    const finalAmount = totalAmount / totalNumberOfFriends;
    setFinalAmount(finalAmount);
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
      <SelectWrapper>
        <label for="number-of-friends">Number of friends:</label>
        <select
          name="number-of-friends"
          value={totalNumberOfFriends}
          onChange={selectFriendsTotal}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </SelectWrapper>

      <div className="toggle-select-friends-buttons">
        {listOfFriends.map((friend) => {
          return (
            <>
              <label for={friend}>{friend}</label>
              <input
                type="radio"
                onClick={selectFriendsToggle}
                name="selected-friends"
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

const SelectWrapper = styled.div`
  display: inline-flex;
  margin: 0 0 15px;
  min-width: 50%;
  label {
    width: 50%;
    text-align: right;
    margin-right: 15px;
  }
  select {
    width: 50%;
  }
`;

const ResultsWrapper = styled.div`
  margin: 30px 0;
  font-size: 25px;
  font-weight: 500;
`;
