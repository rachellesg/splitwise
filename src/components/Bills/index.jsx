import { useState, useRef } from "react";
import BillsList from "./List";

import styled from "styled-components";

function Bills() {
  const [bills, setBill] = useState([
    { name: "Jollibee on Wednesday", amount: 85 },
  ]);
  const billRef = useRef();
  const billNameRef = useRef();

  const handleAddBill = (e) => {
    const billName = billNameRef.current.value;
    const bill = billRef.current.value;
    if (bill === "") return null;
    console.log(billName, bill);
    setBill((prevList) => {
      return [...prevList, { name: billName, amount: bill }];
    });
    billNameRef.current.value = null;
    billRef.current.value = null;
  };

  return (
    <BillWrapper>
      <BillsList bills={bills} />
      <input ref={billNameRef} type="text" placeholder="Name of Bill" />
      <input ref={billRef} type="number" placeholder="Amount" />
      <button onClick={handleAddBill}>Add Bill</button>
    </BillWrapper>
  );
}

export default Bills;

const BillWrapper = styled.div`
  padding: 20px;
  box-shadow: -6px -8px 0 0 darkolivegreen;
`;
