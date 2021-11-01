import { useState, useRef } from "react";
import BillsList from "./List";

function Bills() {
  const [bills, setBill] = useState([{ name: "Rachelle", amount: 85 }]);
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
    <>
      <BillsList bills={bills} />
      <input ref={billNameRef} type="text" placeholder="Name of Bill" />
      <input ref={billRef} type="number" placeholder="Amount" />
      <button onClick={handleAddBill}>Add Bill</button>
    </>
  );
}

export default Bills;
