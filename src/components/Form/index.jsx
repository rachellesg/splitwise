import React, { useState } from "react";
import styled from "styled-components";

function Form() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [totalNumberOfFriends, setTotalNumberOfFriends] = useState(0);

  const selectFriendsTotal = (e) => {
    e.preventDefault();
    setTotalNumberOfFriends(e.target.value);
    console.log(e.target.value);
  };

  const calculateSplitAmount = (e) => {
    e.preventDefault();
    const finalAmount = totalAmount / totalNumberOfFriends;
    setFinalAmount(finalAmount);
  };

  return (
    <FormWrapper>
      <InputWrapper
        type="text"
        name="amount"
        onChange={(e) => setTotalAmount(e.target.value)}
      />
      <SelectWrapper>
        <label for="number-of-friends">Number of friends:</label>
        <select name="number-of-friends" onChange={selectFriendsTotal}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </SelectWrapper>

      <button onClick={calculateSplitAmount}>Calculate Amount</button>

      <div className="result">
        {finalAmount && (
          <div className="friends-pay">Each pays {finalAmount}</div>
        )}
      </div>
    </FormWrapper>
  );
}

export default Form;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.input`
  height: 35px;
  padding: 5px 8px;
  font-size: 45px;
  margin: 0 0 15px;
`;

const SelectWrapper = styled.div`
  display: inline-flex;
  margin: 0 0 15px;
  select {
    width: 50%;
  }
`;
