import { createContext } from "react";

export const HeaderContext = createContext();

function Header(props) {
  return (
    <HeaderContext.Provider>
      <h1>{props.children}</h1>
    </HeaderContext.Provider>
  );
}

export default Header;
