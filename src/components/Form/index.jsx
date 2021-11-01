import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

function Form() {
  const billAmount = useRef();
  const [finalAmount, setFinalAmount] = useState(0);
  const [listOfFriends, setListOfFriends] = useState([
    { name: "Sally" },
    { name: "Peter" },
    { name: "Ethan" },
  ]);

  const [selectedFriends, setSelectedFriends] = useState([]);

  useEffect(() => {
    localStorage.setItem("Selected Friends", JSON.stringify(selectedFriends));
  }, [selectedFriends]);

  const selectFriendsToggle = (e) => {
    const addedFriend = e.target.value;
    console.log(addedFriend);
    console.log(selectedFriends);
    // to check whether friends is duplicated
    const hasSelectedFriends = !selectedFriends.find((item) => {
      return item.name == addedFriend;
    });
    setSelectedFriends((prevState) => {
      return [...prevState, { name: addedFriend }];
    });
    // hasSelectedFriends
    //   ? selectedFriends.push(addedFriend)
    //   : selectedFriends.filter((i) => i !== addedFriend);
  };

  const calculateSplitAmount = (e) => {
    const checkIfEmptyList = selectedFriends.length !== 0;
    if (checkIfEmptyList) {
      console.log(selectedFriends);
      const totalNumberOfFriends = selectedFriends.length;
      const finalAmount = billAmount.current.value / totalNumberOfFriends;
      setFinalAmount(finalAmount);
    }
  };

  return (
    <FormWrapper>
      <InputWrapper>
        <label for="total-amount">Total Bill Amount:</label>
        <input
          ref={billAmount}
          type="text"
          name="total-amount"
          placeholder="Enter total bill amount"
        />
      </InputWrapper>

      <div className="toggle-select-friends-buttons">
        {listOfFriends.map((friend) => {
          const { name } = friend;
          return (
            <>
              <label for={name}>{name}</label>
              <input
                type="checkbox"
                onClick={selectFriendsToggle}
                name={name}
                value={name}
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
