import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [friends, setFriends] = [];

  const listOfFriends = ["Mandy", "Penelope", "Margaret"];

  return (
    <div className="App">
      <header className="App-header">Rachelle's Splitwise</header>
      <form>
        <input type="text" name="amount" />
        <input type="text" name="friends" />
        {listOfFriends && (
          <select>
            {listOfFriends.map((value, index) => {
              return <option>{value}</option>;
            })}
          </select>
        )}
      </form>
    </div>
  );
}

export default App;
